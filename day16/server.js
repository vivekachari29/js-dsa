const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});

app.get("/api/user", (req, res) => {
    res.json({
        name: "Vivek",
        role: "MERN Developer"
    });
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});