const cart = require("../controller/cartController");
const router = require("express").Router();
const AuthMiddleware = require('../middleware/AuthMiddleware');


// Route to add product to carts table
router.post('/addToCart', AuthMiddleware, cart.addToCart);

// Route to get cart items
router.get('/getCartItems', AuthMiddleware, cart.getCartItems);

// Route to delete product from carts table
router.delete('/deleteFromCart/:id_product', AuthMiddleware, cart.deleteFromCart);

// Route to clear user cart
router.delete('/clearCart', AuthMiddleware, cart.clearCart);

module.exports = router;