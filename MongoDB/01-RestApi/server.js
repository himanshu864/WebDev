const express = require("express");
const app = express();
const mongoose = require('mongoose');

// Connect
mongoose.connect('mongodb://127.0.0.1:27017/restUsers')
    .then(() => console.log("MongoDB Connected!"))
    .catch(err => { console.log("MongoDB Error : ", err), process.exit(1) });

// Schema
const userSchema = new mongoose.Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String },
        email: { type: String, required: true, unique: true },
        gender: { type: String },
        job_title: { type: String }
    },
    { timestamps: true }
);

// Model
const User = mongoose.model('user', userSchema);

app.use(express.urlencoded({ extended: false }));

// Global Middleware
app.use((req, res, next) => {
    if (mongoose.connection.readyState !== 1) // 1 means connected
        return res.status(500).json({ error: "Database Connection Problem" });

    try {
        User.find({}); // Check if Model connected
        next();
    } catch (error) {
        res.status(500).json({ error: "Database Connection Problem" })
    }
})

// // Global error handler middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
// });

app.get('/users', async (req, res) => {
    const allDbUsers = await User.find({});
    const html =
        `<ul>
            ${allDbUsers.map(user => `<li> ${user.first_name} - ${user.email}</li>`).join("")}
        </ul>`
    return res.send(html);
})

app.route('/api/users')
    .get(async (req, res) => {
        const users = await User.find({});
        return res.json(users);
    })
    .post(async (req, res) => {
        const user = req.body;
        const requiredFields = ['first_name', 'last_name', 'email', 'gender', 'job_title'];

        for (const field of requiredFields)
            if (!user[field])
                return res.status(400).json({ Error: "All fields are required!" });

        // Create user
        try {
            await User.create({ ...user });
            return res.status(201).json({ status: "Successfully Created!" });
        } catch {
            return res.status(400).json({ Error: "Invalid Fields Format" });
        }
    })

app.route('/api/users/:id')
    .all(async (req, res, next) => {
        const userId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(userId))
            return res.status(404).json({ error: "Invalid UserID Format" });

        const user = await User.findById(userId);
        if (!user)
            return res.status(404).json({ error: "User not found" });

        next();
    })
    .get(async (req, res) => {
        const user = await User.findById(req.params.id);
        return res.json(user);
    })
    .patch(async (req, res) => {
        const updates = req.body;
        try {
            await User.findByIdAndUpdate(req.params.id, { ...updates });
            return res.json({ status: "Successfully Updated!", updates: { ...updates } });
        } catch {
            return res.status(500).json({ error: "Something Went Wrong" });
        }
    })
    .delete(async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id);
            return res.json({ status: "Successfully Deleted!" });
        } catch {
            return res.status(500).json({ error: "Something Went Wrong" });
        }
    })

app.listen(3000);
