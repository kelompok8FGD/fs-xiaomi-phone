const paymentMethod = require("../controller/PaymentMethodController");

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
// get payment method by provider
router.get(
  "/paymentMethods/provider/:provider",
  paymentMethod.getPaymentMethodByProvider
);
// create payment method
router.post("/paymentMethods", paymentMethod.createNewPaymentMethod);
// update payment method
router.put("/paymentMethods/:id", paymentMethod.updatePayment);
// delete payment method
router.delete("/paymentMethods/:id", paymentMethod.deletePayment);

module.exports = router;
