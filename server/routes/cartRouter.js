const cart = require("../controller/cartsController");

const router = require("express").Router();
const AuthMiddleware = require('../middleware/AuthMiddleware');

// Necessary change: Adding and Deleting products from the carts table before checkout

// Route to add item to cart
//router.post("/add", validateToken, cart.addToCart);
// Route to get cart items
router.get("/get", AuthMiddleware, cart.getCartItems);

module.exports = router;