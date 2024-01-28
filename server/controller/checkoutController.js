const db = require("../models");
const Customer = db.CustomerModel;
const PaymentMethod = db.PaymentMethodModel;
const CartModel = db.CartModel;
const ProductModel = db.ProductModel;
const AddressModel = db.AddressModel;
const ShipmentMethodModel = db.ShipmentMethodModel;
const CheckoutModel = db.CheckoutModel;
// const flat = require("flat");

const flattenObject = (obj, parentKey = "") => {
  let result = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let newKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof obj[key] === "object" && obj[key] !== null) {
        // Jika nilai kunci adalah objek, rekursif panggil flattenObject
        result = { ...result, ...flattenObject(obj[key], newKey) };
      } else {
        // Jika bukan objek, langsung tambahkan ke hasil
        result[newKey] = obj[key];
      }
    }
  }

  return result;
};
const checkoutController = async (req, res) => {
  try {
    const id_customer = req.id_customer; // Diambil dari token di middleware

    // Mendapatkan data pelanggan
    const customer = await Customer.findByPk(id_customer, {
      attributes: ["fullname", "email"],
    });

    // Mendapatkan alamat pelanggan (pastikan untuk mengganti 'columnName' sesuai dengan kolom yang sesuai)
    const address = await AddressModel.findOne({
      where: { id_customer },
      attributes: [
        "address_name",
        "province",
        "city",
        "subdistrict",
        "villages",
        "full_address",
        "postal_code",
        "phone_number",
      ],
    });

    // Mendapatkan metode pembayaran
    const paymentMethod = await PaymentMethod.findOne({
      where: { id_customer },
      attributes: ["payment_type"],
    });
    const shipmentMethod = await ShipmentMethodModel.findOne({
      where: { id_customer },
      attributes: ["shipment_type"],
    });

    // Menggunakan fungsi yang diimpor untuk mendapatkan item keranjang
    const cartItems = await CartModel.findAll({
      where: { id_customer },
      include: [
        {
          model: ProductModel,
          attributes: ["name_product", "image", "price"],
        },
      ],
    });

    // Mengecek ketersediaan data sebelum memberikan respons
    if (
      !customer ||
      !address ||
      !paymentMethod ||
      !cartItems ||
      !shipmentMethod
    ) {
      return res.status(404).json({
        status: "failed",
        message: "Some data not found for the customer.",
      });
    }

    // Fungsi untuk melakukan transformasi data
    function transformData(data) {
      return {
        checkout_id: data.checkout_Id,
        fullname: data.customer.fullname,
        email: data.customer.email,
        address_name: data.address.address_name,
        province: data.address.province,
        city: data.address.city,
        subdistrict: data.address.subdistrict,
        villages: data.address.villages,
        full_address: data.address.full_address,
        postal_code: data.address.postal_code,
        phone_number: data.address.phone_number,

        payment_type: data.paymentMethod.payment_type,
        shipment_type: data.shipmentMethod.shipment_type,

        // tambahkan transformasi untuk kunci-kunci lainnya
        // ...
        cartItems: data.cartItems.map(transformCartItem),
      };
    }
    function transformCartItem(cartItem) {
      return {
        id_cart: cartItem.id_cart,
        id_product: cartItem.id_product,
        id_customer: cartItem.id_customer,
        qty: cartItem.qty,
        price: cartItem.price,
        name_product: cartItem.ProductModel.name_product,
        image: cartItem.ProductModel.image,
        price_product: cartItem.ProductModel.price,
      };
    }

    const flattenedResponse = transformData({
      customer: customer.toJSON(),
      address: address.toJSON(),
      paymentMethod: paymentMethod.toJSON(),
      shipmentMethod: shipmentMethod.toJSON(),
      cartItems: cartItems.map((item) => item.toJSON()),
    });

    // Memberikan respons dengan data yang telah ditemukan
    return res.json({
      status: "ok",
      data: flattenedResponse,
    });
  } catch (error) {
    console.error("Error during checkout:", error);
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

const createNewCheckout = async (req, res) => {
  try {
    const {
      id_checkout,
      id_address,
      id_payment_method,
      id_shipment_method,
      id_product,
    } = req.body;

    // Ambil ID pengguna dari token
    const id_customer = req.id_customer;

    // Pastikan ID pengguna ada
    if (!id_customer) {
      return res.status(401).json({
        status: "failed",
        message: "User ID not found in the token",
      });
    }

    details = {
      id_customer,
      id_checkout,
      id_address,
      id_payment_method,
      id_shipment_method,
      id_product,
    };

    const newCheckout = await CheckoutModel.create(details);

    res.status(201).json({
      status: "ok",
      data: newCheckout,
    });
  } catch (error) {
    console.log(error, "<<<- Error create new address");
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

module.exports = { checkoutController, createNewCheckout };

// Memberikan respons dengan data yang telah ditemukan
// return res.json({
//   status: "ok",
//   data: {
//     customer,
//     address,
//     paymentMethod,
//     cartItems,
//   },
// });

// Flatten objek respons sebelum mengirimkannya
// const flattenedResponse = flat({
//   customer: customer.toJSON(),
//   address: address.toJSON(),
//   paymentMethod: paymentMethod.toJSON(),
//   cartItems: cartItems.map((item) => item.toJSON()),
// });

// const flattenObject = (obj) => {
//   const flattened = {};

//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (typeof obj[key] === "object" && obj[key] !== null) {
//         // Rekursif untuk objek bersarang
//         const nestedFlatten = flattenObject(obj[key]);
//         for (const nestedKey in nestedFlatten) {
//           if (nestedFlatten.hasOwnProperty(nestedKey)) {
//             flattened[`${key}.${nestedKey}`] = nestedFlatten[nestedKey];
//           }
//         }
//       } else {
//         flattened[key] = obj[key];
//       }
//     }
//   }
// };

// const flattenedObject = flattenObject(nestedObject);
