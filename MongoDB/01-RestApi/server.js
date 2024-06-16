const express = require("express");
const app = express();
const mongoose = require('mongoose');

// Connect
mongoose.connect('mongodb://127.0.0.1:27017/restUsers')
    .then(() => console.log("MongoDB Connected!"))
    .catch(err => console.log("MongoDB Error : ", err));

// Schema
const userSchema = new mongoose.Schema({
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
        await User.create({ ...user });
        return res.status(201).json({ status: "Successfully Created!" });
    })

app.route('/api/users/:id')
    .all(async (req, res, next) => {
        const user = await User.findById(req.params.id);
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
        await User.findByIdAndUpdate(req.params.id, { ...updates });
        return res.json({ status: "Successfully Updated!", updates: { ...updates } });
    })
    .delete(async (req, res) => {
        await User.findByIdAndDelete(req.params.id);
        return res.json({ status: "Successfully Deleted!" });
    })

app.listen(3000);
