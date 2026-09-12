const express = require("express");

const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Home page
app.get("/", (req, res) => {
    res.render("index");
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
