const db = require("../models");
const Customer = db.CustomerModel;
const CustomerAddressModel = db.CustomerAddressModel;
const PaymentMethod = db.PaymentMethodModel;
const { getCartItems } = require("./cartController");

const checkoutController = async (req, res) => {
  try {
    const id_customer = req.id_customer; // Diambil dari token di middleware

    // Mendapatkan data pelanggan
    const customer = await Customer.findByPk(id_customer);

    // Mendapatkan alamat pelanggan (pastikan untuk mengganti 'columnName' sesuai dengan kolom yang sesuai)
    const address = await CustomerAddressModel.findOne({
      where: { id_customer },
    });

    // Mendapatkan metode pembayaran
    const paymentMethod = await PaymentMethod.findOne({
      where: { id_customer },
    });

    // Menggunakan fungsi yang diimpor untuk mendapatkan item keranjang
    const cartItems = await getCartItems(req, res);

    // Mengecek ketersediaan data sebelum memberikan respons
    if (!customer || !address || !paymentMethod || !cartItems) {
      return res.status(404).json({
        status: "failed",
        message: "Some data not found for the customer.",
      });
    }

    // Memberikan respons dengan data yang telah ditemukan
    res.json({
      status: "ok",
      data: {
        customer,
        address,
        paymentMethod,
        cartItems,
      },
    });
  } catch (error) {
    console.error("Error during checkout:", error);
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

module.exports = checkoutController;
