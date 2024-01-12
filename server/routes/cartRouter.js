const cart = require("../controller/cartsController");

const router = require("express").Router();
const validateToken = require('../middleware/AuthMiddleware');

// Route to add item to cart
//router.post("/add", validateToken, cart.addToCart);
// Route to get cart items
router.get("/get", validateToken, cart.getCartItems);

module.exports = router;