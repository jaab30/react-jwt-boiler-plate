const router = require("express").Router();
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

// Routes start with /auth
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/user", auth, authController.getUser);

module.exports = router;