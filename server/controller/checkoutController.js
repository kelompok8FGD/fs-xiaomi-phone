const db = require("../models");
const Customer = db.CustomerModel;
const PaymentMethod = db.PaymentMethodModel;
const CartModel = db.CartModel;
const ProductModel = db.ProductModel;
const AddressModel = db.AddressModel;
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
    if (!customer || !address || !paymentMethod || !cartItems) {
      return res.status(404).json({
        status: "failed",
        message: "Some data not found for the customer.",
      });
    }

    const flattenedResponse = flattenObject({
      customer: customer.toJSON(),
      address: address.toJSON(),
      paymentMethod: paymentMethod.toJSON(),
      cartItems: cartItems.map((item) => item.toJSON()),
    });

    // Mengubah kunci-kunci
    // const renamedResponse = {};
    // Object.keys(flattenedResponse).forEach((key) => {
    //   // Menghilangkan awalan "customer.", "address.", "paymentMethod.", "cartItems.0.", dan "ProductModel."
    //   const newKey = key.replace(
    //     /^(customer|address|paymentMethod|cartItems\.\d+|ProductModel)\./,
    //     ""
    //   );
    // Menghilangkan kembali awalan "ProductModel." jika ada
    // const finalKey = newKey.replace(/^ProductModel\./, "");
    //   renamedResponse[newKey] = flattenedResponse[key];
    // });

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

module.exports = checkoutController;

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
