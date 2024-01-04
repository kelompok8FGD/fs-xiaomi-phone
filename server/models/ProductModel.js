const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const { Op } = require("sequelize");

const ProductModel = sequelize.define(
  "ProductModel",
  {
    id_product: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_product: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    category_product: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    specification: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    discount: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "ProductModel",
    tableName: "products",
    timestamps: false,
  }
);

// Menambahkan pemanggilan sync
// ProductModel.sync({ alter: true })
//   .then(() => {
//     //update table
//     return ProductModel.create({
//       name_product: "POCO X5 Pro 5G",
//       category_product: "POCO Phone",
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/xiaomi-phone-e544c.appspot.com/o/poco_x5_pro_5g%2Fimage_poco_x5_pro_5g_black.png?alt=media&token=9c536bab-f6ca-448a-a6de-aa00400c471d",
//       specification: "Snapdragon 778G | 108MP",
//       price: 3799000,
//       stock: 6,
//       discount: 5,
//     });
//   })
//   .then((data) => {
//     console.log(data);
//     console.log("Table created successfully");
//   })
//   .catch((err) => {
//     console.error("Error creating table:", err.message);
//   });

module.exports = ProductModel;
