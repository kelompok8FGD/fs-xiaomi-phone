const db = require("../models");
const PaymentMethod = db.PaymentMethodModel;
const { Op } = require("sequelize");

// Get all payment methods
const findAllPayments = async (req, res) => {
  try {
    const dataPaymentMethods = await PaymentMethod.findAll();

    const result = {
      status: "ok",
      data: dataPaymentMethods,
    };
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get payment method by ID
const getPaymentMethodById = async (req, res) => {
  try {
    const { id } = req.params;

    const dataPaymentMethod = await PaymentMethod.findByPk(id);

    if (!dataPaymentMethod) {
      return res.status(404).json({ error: "Payment method not found" });
    }

    res.json({
      status: "ok",
      message: "Get Payment ID Successfully",
      data: dataPaymentMethod,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get payment by payment_type
const getPaymentMethodByPaymentType = async (req, res) => {
  try {
    const { payment_type } = req.params;

    const dataPaymentType = await PaymentMethod.findAll({
      where: {
        payment_type: {
          [Op.like]: `%${payment_type}%`,
        },
      },
    });

    res.json({
      status: "success",
      data: dataPaymentType,
    });
  } catch (error) {
    console.error("Error retrieving payment by Payment_Type:", error);
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

// Create a payment method
const createNewPaymentMethod = async (req, res) => {
  try {
    const { id_customer: id_customer, payment_type } = req.body;

    details = {
      id_customer,
      payment_type,
    };

    const newPaymentMethod = await PaymentMethod.create(details, {
      where: { id_customer: id_customer },
    });

    if (newPaymentMethod) {
      res.status(201).json({
        status: "ok",
        message: "Create Payment Method Succesfully",
        data: newPaymentMethod,
      });
    }
  } catch (error) {
    console.log(error, "<<<- Error create new product");
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

// Update payment method by ID
const updatePayment = async (req, res, next) => {
  try {
    const paymentId = req.params.id;

    // Check if paymentId is valid
    if (!paymentId) {
      return res.status(400).json({
        status: "failed",
        message: "Invalid payment ID",
      });
    }

    // Retrieve the existing product data
    const existingPayment = await PaymentMethod.findByPk(paymentId);

    // Check if the product exists
    if (!existingPayment) {
      return res.status(404).json({
        status: "failed",
        message: `Payment with ID ${paymentId} not found`,
      });
    }

    const updatedPayment = await existingPayment.update(req.body);

    res.json({
      status: "success",
      message: "Payment Updated Successfully",
      paymentUpdated: updatedPayment,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

// Delete payment method by ID
const deletePayment = async (req, res, next) => {
  try {
    const paymentId = req.params.id;

    // Check if productId is valid
    if (!paymentId) {
      return res.status(400).json({
        status: "failed",
        message: "Invalid payment ID",
      });
    }

    const paymentMethodDeleted = await PaymentMethod.findByPk(paymentId);

    const paymentDeleted = await PaymentMethod.destroy({
      where: { id_payment_method: paymentId },
    });

    if (!paymentDeleted) {
      return res.status(404).json({ error: "Payment method not found" });
    }

    res.json({
      status: "success",
      message: "Payment Deleted Successfully",
      paymentDeleted: paymentMethodDeleted,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

module.exports = {
  findAllPayments,
  getPaymentMethodById,
  getPaymentMethodByPaymentType,
  createNewPaymentMethod,
  updatePayment,
  deletePayment,
};
