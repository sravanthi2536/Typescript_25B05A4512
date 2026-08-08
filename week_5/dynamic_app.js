const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the Express Server");
});

app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    res.send("User ID: " + userId);
});

app.get("/search", (req, res) => {
    const name = req.query.name;
    const age = req.query.age;

    res.send(`Name: ${name}, Age: ${age}`);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});