const router = require("express").Router();
const authRoutes = require("./auth");

// Routes for authentication
router.use("/auth", authRoutes);

module.exports = router;