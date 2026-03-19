const express = require("express");

const app = express();
const PORT = 5000;


// 🔹 Middleware 1 - Logger
function logger(req, res, next) {
    console.log("Request received:", req.method, req.url);
    next();
}

// 🔹 Middleware 2 - Simple checker
function checkUser(req, res, next) {
    console.log("Checking user...");
    next();
}


// Use middleware (order matters)
app.use(logger);
app.use(checkUser);


// Routes
app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/api/data", (req, res) => {
    res.json({
        name: "Vivek",
        role: "Learning Backend",
        day: 18
    });
});


// Start server
app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});