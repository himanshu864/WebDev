const express = require('express');
const router = express.Router();
const users = require('../MOCK_DATA.json');

// Server Side Rendering
router.get('/', (req, res) => {
    const html =
        `<ul>
            ${users.map(user => `<li> ${user.first_name} </li>`).join("")}
        </ul>`
    return res.send(html);
});

module.exports = router;
