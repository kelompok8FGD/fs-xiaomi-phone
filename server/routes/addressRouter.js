const customerAddress = require("../controller/customerAddressController");
const address = require("../controller/addressController");

const router = require("express").Router();

router.get("/address", customerAddress.getCustomerAddresses);
router.post("/address", address.createNewAddress);

module.exports = router;
