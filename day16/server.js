const express = require("express");

const app = express();

// Middleware to read JSON
app.use(express.json());


// Home route
app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});


// Get single user example
app.get("/api/user", (req, res) => {
    res.json({
        name: "Vivek",
        role: "MERN Developer",
        challenge: "100 Day Job Challenge"
    });
});


// Get multiple users
app.get("/api/users", (req, res) => {
    res.json([
        { name: "Vivek", role: "Developer" },
        { name: "Rahul", role: "Designer" }
    ]);
});


// POST route to create user
app.post("/api/user", (req, res) => {

    const { name, role } = req.body;

    if (!name || !role) {
        return res.status(400).json({
            message: "Name and role are required"
        });
    }

    res.status(201).json({
        message: "User created successfully",
        user: {
            name,
            role
        }
    });
});


// Start server
app.listen(5000, () => {
    console.log("Server started on port 5000");
});