const router = require("express").Router();
const authController = require("../controllers/authController");

// Routes start with /auth
router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;