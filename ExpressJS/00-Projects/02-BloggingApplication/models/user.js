const { Schema, model } = require("mongoose");
const { createHmac, randomBytes } = require("crypto");
const { createTokenForUser } = require("../utils/authentication");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    profileImageURL: {
      type: String,
      default: "/images/sokka.jpg",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

// Pre middleware functions are executed one after another, when each middleware calls next.
userSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return;

  const salt = randomBytes(16).toString();

  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

  this.salt = salt;
  this.password = hashedPassword;

  next();
});

//Virtual Function
// !! DONT USE ASYNC HANDLER HERE. this GETS FUCKED UP
userSchema.static("matchPasswordGenToken", async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) throw new Error("User not found!");

  const salt = user.salt;
  const hashedPassword = user.password;

  const typedPasswordHash = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

  if (typedPasswordHash !== hashedPassword)
    throw new Error("Incorrect password!");

  const token = createTokenForUser(user);
  return token;
});

const User = model("user", userSchema);

module.exports = User;
