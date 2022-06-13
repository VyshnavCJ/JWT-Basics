const { dashBoard, login } = require("../controllers/main");
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

router.get("/dashboard", authMiddleware, dashBoard);
router.post("/login", login);

module.exports = router;
