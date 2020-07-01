const router = require("express").Router();
const authController = require("../controllers/authController");

// Routes start with /auth
router.post("/register", authController.register);
router.get("/login", authController.register);

module.exports = router;