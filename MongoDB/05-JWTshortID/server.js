require("dotenv").config();
const express = require("express");
const app = express();

const urlRouter = require("./routers/url.js");
const idRouter = require("./routers/id.js");
const staticRouter = require("./routers/static.js");
const userRouter = require("./routers/user.js");
const adminRouter = require("./routers/admin.js");

const cookieParser = require("cookie-parser");
const connectMongoDB = require("./config/connect.js");

const uri = process.env.URI;
connectMongoDB(uri);

const {
  restrictUnauthenticated,
  restrictUnauthorized,
} = require("./middlewares/unauth.js");

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/URL", restrictUnauthenticated, urlRouter); // Generate ShortURL
app.use("/r", idRouter); // RirectURL
app.use("/user", userRouter); // User Authentication
app.use("/admin", restrictUnauthenticated, restrictUnauthorized, adminRouter); // Admin Access
app.use("/", staticRouter); // Server Static Files

app.use((err, req, res, next) => res.status(500).json({ error: err.message }));

const port = process.env.PORT || 3000;
app.listen(port);
