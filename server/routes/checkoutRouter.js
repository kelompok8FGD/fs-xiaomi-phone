const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middleware/AuthMiddleware");
const checkout = require("../controller/checkoutController");

// Route to handle checkout process
router.get("/checkout", AuthMiddleware, checkout.checkoutController);
router.post("/checkout", AuthMiddleware, checkout.createNewCheckout);

module.exports = router;
