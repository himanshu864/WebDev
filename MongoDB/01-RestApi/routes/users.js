const express = require("express");
const router = express.Router();

const { handleGetUsers } = require("../controllers/users");

router.get("/", handleGetUsers);

module.exports = router;
