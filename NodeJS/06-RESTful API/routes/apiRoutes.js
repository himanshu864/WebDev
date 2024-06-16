const express = require('express');
const router = express.Router();
const users = require("../MOCK_DATA.json");
const fs = require("fs");
const path = require('path');

// Utility function for updating MOCK_DATA.JSON file
const writeToFile = (data, res, msg) => {
    const filePath = path.join(__dirname, '..', 'MOCK_DATA.json');
    fs.writeFile(filePath, JSON.stringify(data), (err) => {
        if (err)
            return res.status(500).json({ status: "Error", message: "Failed to write to file" });
        else
            return res.status(201).json({ status: "Success", message: msg });
    })
}

// Middleware to validate users existence
const validateUser = (req, res, next) => {
    const userId = Number(req.params.id);
    const userIdx = users.findIndex(user => user.id === userId);
    if (userIdx === -1)
        return res.status(404).json({ status: "User doesn't exist!" });
    next();
}

// REST API
// Route to handle user-related API requests
router.route('/')
    .get((req, res) => {
        return res.json(users);
    })
    .post((req, res) => {
        const user = req.body;
        const requiredFields = ['first_name', 'last_name', 'email', 'gender', 'job_title'];

        // Validate all fields
        for (const field of requiredFields)
            if (!user[field])
                return res.status(400).json({ Error: "All fields are required!" });

        // Create user
        users.push({ id: users.length + 1, ...user });
        writeToFile(users, res, "User created Successfully!");
    })

// Route to handle dynamic user API requests
router.route('/:id')
    .all(validateUser)
    .get((req, res) => {
        const userId = Number(req.params.id);
        const user = users.find(user => user.id === userId);
        return res.json(user);
    })
    .patch((req, res) => {
        const userId = Number(req.params.id);
        const updates = req.body;
        const userIdx = users.findIndex(u => u.id === userId);
        users[userIdx] = { ...users[userIdx], ...updates };
        writeToFile(users, res, "User updated Successfully!");
    })
    .delete((req, res) => {
        const userId = Number(req.params.id);
        const updatedUsers = users.filter(user => user.id !== userId);
        writeToFile(updatedUsers, res, "User deleted Successfully!");
    })

module.exports = router;