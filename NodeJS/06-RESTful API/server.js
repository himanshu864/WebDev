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
        return res.json(users);
    })
    .post((req, res) => {
        // Create user
        const user = req.body;
        users.push({ id: users.length + 1, ...user });
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
            return res.json({ status: "Success", id: users.length });
        })
    })

// Dynamic Path Parameters
app.route('/api/users/:id')
    .get((req, res) => {
        // get user
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id);
        return res.json(user);
    })
    .patch((req, res) => {
        // Update user
        return res.json({ status: "pending..." });
    })
    .delete((req, res) => {
        // delete user
        return res.json({ status: "pending..." });
    })

app.listen(port, () => {
    console.log("Initializing Server...");
});