const cart = require("../controller/cartsController");

const router = require("express").Router();

router.get("/carts", cart.findAllCarts);

module.exports = router;