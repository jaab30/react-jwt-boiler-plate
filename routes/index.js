const router = require("express").Router();
const authRoutes = require("./auth");
const path = require("path");

// Routes for authentication
router.use("/auth", authRoutes);

// If no API routes are hit, send the React app
router.use("*", (req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

module.exports = router;