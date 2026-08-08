const express = require("express");

const app = express();
const PORT = 3000;

// Custom Logging Middleware
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

// Use the middleware
app.use(logger);

// Routes
app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "John" },
        { id: 2, name: "Alice" }
    ]);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});