const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to receive JSON
app.use(express.json());

// Sample data
let users = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Alice", age: 22 }
];

// POST - Add a new user
app.post("/users", (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    users.push(user);

    res.status(201).json(user);
});

// PUT - Update user using dynamic URL
app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name;
    user.age = req.body.age;

    res.json(user);
});

// DELETE - Delete user using dynamic URL
app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    const deletedUser = users.splice(index, 1);

    res.json({
        message: "User deleted",
        user: deletedUser[0]
    });
});

// GET - View all users
app.get("/users", (req, res) => {
    res.json(users);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});