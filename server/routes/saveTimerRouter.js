const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middleware/AuthMiddleware");
const timerController = require("../controller/saveTimerController");

// Routes untuk operasi CRUD pada Timer
// router.post("/timers", timerController.createTimer);
router.post("/timers", AuthMiddleware, timerController.saveTimerData);
router.get("/timers", AuthMiddleware, timerController.getTImerUser);

module.exports = router;
