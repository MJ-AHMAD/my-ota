const express = require("express");

const router = express.Router();

// Mock Data (Example: Replace with actual database logic)
const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" }
];

// Define GET /api/users route
router.get("/", (req, res) => {
    res.json(users); // Send the list of users as JSON
});

module.exports = router;