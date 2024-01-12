const customer = require("../controller/customerController");

const router = require("express").Router();

// customer routes
router.get('/customers', customer.findAllCustomers);
router.get("/customers/:id", customer.getCustomerById);
router.post('/register', customer.createNewCustomer);
router.post('/login', customer.loginCustomer);


module.exports = router;