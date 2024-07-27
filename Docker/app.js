const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Himanshu");
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Successfully running on PORT:${PORT}`));
