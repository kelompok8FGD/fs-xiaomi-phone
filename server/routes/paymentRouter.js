const paymentMethod = require("../controller/PaymentMethodController");
const AuthMiddleware = require("../middleware/AuthMiddleware");

const router = require("express").Router();

// route payment
// get All Payment Method
router.get("/paymentMethods", paymentMethod.findAllPayments);
// get payment method by id
router.get("/paymentMethods/:id", paymentMethod.getPaymentMethodById);
// get payment method by payment_type
router.get(
  "/paymentMethods/payment_type/:payment_type",
  paymentMethod.getPaymentMethodByPaymentType
);
// create payment method
router.post(
  "/paymentMethods",
  AuthMiddleware,
  paymentMethod.createNewPaymentMethod
);
// update payment method
router.put("/paymentMethods/:id", AuthMiddleware, paymentMethod.updatePayment);
// delete payment method
router.delete(
  "/paymentMethods/:id",
  AuthMiddleware,
  paymentMethod.deletePayment
);

module.exports = router;
