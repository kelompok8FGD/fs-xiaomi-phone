const product = require("../controller/productsController");
const AuthMiddleware = require("../middleware/AuthMiddleware");
const router = require("express").Router();

router.get("/products", product.findAllProducts);
router.get("/products/:id", product.getProductById);
router.get("/products/category/:category", product.getProductsByCategory);
router.post("/products", AuthMiddleware, product.createNewProduct);
router.delete("/products/:id", product.deleteProduct);
router.put("/products/:id", product.updateProduct);

module.exports = router;
