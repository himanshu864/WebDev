const express = require("express");
const app = express();

// Express Routing
const userRoutes = require('./routes/usersRoutes');
const apiRoutes = require('./routes/apiRoutes.js');

// Middleware to parse URL-encoded payloads into req.body
app.use(express.urlencoded({ extended: false }));

// Serve HTML with user list
app.use('/users', userRoutes);

// REST API
app.use('/api/users', apiRoutes);

app.listen(3000);
