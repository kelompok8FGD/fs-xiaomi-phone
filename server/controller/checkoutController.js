const db = require("../models");
const Customer = db.CustomerModel;
const CustomerAddressModel = db.CustomerAddressModel;
const PaymentMethod = db.PaymentMethodModel;
const CartModel = db.CartModel;
const ProductModel = db.ProductModel;
const AddressModel = db.AddressModel;
const flat = require("flat");
// const { getCartItems } = require("./cartController");

const checkoutController = async (req, res) => {
  try {
    const id_customer = req.id_customer; // Diambil dari token di middleware
    // const id_product = req.id_product; // Diambil dari token di middleware

    // Mendapatkan data pelanggan
    const customer = await Customer.findByPk(id_customer);

    // Mendapatkan alamat pelanggan (pastikan untuk mengganti 'columnName' sesuai dengan kolom yang sesuai)
    const customerAddress = await CustomerAddressModel.findAll({
      where: { id_customer }, // Menambahkan kondisi pencarian berdasarkan customer_id
      include: [
        {
          model: AddressModel,
          attributes: [
            "address_name",
            "address_line1",
            "address_line2",
            "city",
            "region",
            "postal_code",
          ],
        },
      ],
    });

    // Mendapatkan metode pembayaran
    const paymentMethod = await PaymentMethod.findOne({
      where: { id_customer },
    });

    // Menggunakan fungsi yang diimpor untuk mendapatkan item keranjang
    const cartItems = await CartModel.findAll({
      where: { id_customer },
      include: [
        {
          model: ProductModel,
          attributes: ["name_product", "image"],
        },
      ],
    });

    // Mengecek ketersediaan data sebelum memberikan respons
    if (!customer || !customerAddress || !paymentMethod || !cartItems) {
      return res.status(404).json({
        status: "failed",
        message: "Some data not found for the customer.",
      });
    }

    // Memberikan respons dengan data yang telah ditemukan
    // return res.json({
    //   status: "ok",
    //   data: {
    //     customer,
    //     customerAddress,
    //     paymentMethod,
    //     cartItems,
    //   },
    // });

    // Memberikan respons dengan data yang telah ditemukan
    const flattenedData = {
      status: "ok",
      id_customer: customer.id_customer,
      fullname: customer.fullname,
      address_name: customerAddress[0].AddressModel.address_name,
      address_line1: customerAddress[0].AddressModel.address_line1,
      address_line2: customerAddress[0].AddressModel.address_line2,
      city: customerAddress[0].AddressModel.city,
      region: customerAddress[0].AddressModel.region,
      postal_code: customerAddress[0].AddressModel.postal_code,
      payment_type: paymentMethod.payment_type,
      provider: paymentMethod.provider,
      account_number: paymentMethod.account_number,
      qty: cartItems[0].qty,
      price: cartItems[0].price,
      name_product: cartItems[0].ProductModel.name_product,
      image: cartItems[0].ProductModel.image,
    };

    res.json(flattenedData);
  } catch (error) {
    console.error("Error during checkout:", error);
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

module.exports = checkoutController;
