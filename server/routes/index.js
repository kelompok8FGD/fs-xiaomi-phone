const product = require("../controller/productsController");

const router = require("express").Router();

router.get("/products", product.findAllProducts);
router.get("/products/:id", product.getProductById);
router.post("/products", product.createNewProduct);

module.exports = router;
