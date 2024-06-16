const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const port = 3000;

// for converting values in forms to req.data
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    return res.send("Home Page");
})

// returns HTML for server side rendering
app.get('/users', (req, res) => {
    const html =
        `<ul>
            ${users.map(user => `<li> ${user.first_name} </li>`).join("")}
        </ul>`
    return res.send(html);
})

// REST API
// returns JSON for client side rendering
app.route('/api/users')
    .get((req, res) => {
        console.log(req.headers);
        res.setHeader("X-custom-header", "Himanshu A");
        return res.json(users);
    })
    .post((req, res) => {
        // Create user
        const user = req.body;

        if (!user || !user.first_name || !user.last_name || !user.email || !user.gender || !user.job_title)
            return res.status(404).json({ Error: "All fields are required!" });

        users.push({ id: users.length + 1, ...user });
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
            return res.status(201).json({ status: "Success", id: users.length });
        })
    })

// Dynamic Path Parameters
app.route('/api/users/:id')
    .get((req, res) => {
        // get user
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id);
        if (!user)
            return res.status(404).json({ status: "User doesn't exist!" });
        return res.json(user);
    })
    .patch((req, res) => {
        // Update users
        const id = Number(req.params.id);
        const updates = req.body;
        const userIdx = users.findIndex(user => user.id === id);
        if (userIdx === -1)
            return res.status(404).json({ status: "User doesn't exist!" });

        users[userIdx] = { ...users[userIdx], ...updates }
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
            return res.json({ status: "Success", id: users.length });
        })
        return res.json({ status: "Success..." });
    })
    .delete((req, res) => {
        // delete user
        const id = Number(req.params.id);

        const userIdx = users.findIndex(user => user.id === id);
        if (userIdx === -1)
            return res.status(404).json({ status: "User doesn't exist!" });

        const updated = users.filter(user => user.id !== id);
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(updated), (err, data) => {
            return res.json({ status: "Success", id: users.length });
        })
        return res.json({ status: "Success..." });
    })

app.listen(port, () => {
    console.log("Initializing Server...");
});