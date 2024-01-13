const customerAddress = require("../controller/CustomerAddressController");
const address = require("../controller/addressController");
const AuthMiddleware = require("../middleware/AuthMiddleware");

const router = require("express").Router();

router.get("/address", customerAddress.getCustomerAddresses);
router.get(
  "/customer/:customer_id/address",
  customerAddress.getCustomerAddressesByIdCustomer
);
router.get(
  "/address/:address_id/customer",
  customerAddress.getCustomerAddressesByIdCustomer
);

router.get("/alladdress", address.findAllAddresss);
router.get("/address/:id", address.getAddressById);
router.post("/address", AuthMiddleware, address.createNewAddress);
router.put("/address/:id", AuthMiddleware, address.updateAddress);
router.delete("/address/:id", AuthMiddleware, address.deleteAddress);

module.exports = router;
