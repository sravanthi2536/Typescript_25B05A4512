const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Login page
app.get("/", (req, res) => {
    res.render("login");
});

// Login
app.post("/login", (req, res) => {
    const username = req.body.username;

    // Create cookie
    res.cookie("username", username);

    res.redirect("/dashboard");
});

// Home page
app.get("/dashboard", (req, res) => {

    // Read cookie
    const username = req.cookies.username;

    // If cookie doesn't exist, go to login
    if (!username) {
        return res.redirect("/");
    }

    res.render("dashboard", { username: username });
});

// Logout
app.get("/logout", (req, res) => {

    // Delete cookie
    res.clearCookie("username");

    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});