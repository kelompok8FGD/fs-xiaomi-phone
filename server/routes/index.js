const product = require("../controller/productsController");
const address = require("../controller/CustomerAddressController");

const router = require("express").Router();

router.get("/products", product.findAllProducts);
router.get("/products/:id", product.getProductById);
router.get("/products/category/:category", product.getProductsByCategory);
router.post("/products", product.createNewProduct);
router.delete("/products/:id", product.deleteProduct);
router.put("/products/:id", product.updateProduct);

router.get("/address", address.getCustomerAddresses);
router.post("/address", address.createNewAddress);

module.exports = router;
