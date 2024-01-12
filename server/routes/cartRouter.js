const cart = require("../controller/cartsController");

const router = require("express").Router();
const validateToken = require('../middleware/AuthMiddleware');

router.get("/carts", cart.findAllCarts);

module.exports = router;