const db = require("../models");
const Customer = db.CustomerModel;
const Address = db.AddressModel;
const PaymentMethod = db.PaymentMethodModel;
const { getCartItems } = require("./cartController");


// Import the function for getting cart items from the cart controller


const checkoutController = async (req, res) => {
    console.log('req:', req);
  try {
    const id_customer = req.id_customer; // Extracted from the token in the middleware

    // Retrieve necessary data for checkout
    const customer = await Customer.findByPk(id_customer);
    //const address = await Address.findOne({ where: { id_customer } });
    const paymentMethod = await PaymentMethod.findOne({ where: { id_customer } });

    // Use the imported function to get cart items
    const cartItems = await getCartItems(req,res);

    res.json({
      status: 'ok',
      data: {
        customer,
        paymentMethod,
        cartItems,
      }, //ADD ADDRESS TOO
    });
  } catch (error) {
    console.error('Error during checkout:', error);
    res.status(500).json({
      status: 'failed',
      message: 'Internal Server Error',
    });
  }
};

module.exports = checkoutController;

