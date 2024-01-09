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
      unique: true,
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
async function createTableIfNotExists() {
  try {
    // Sinkronkan model dengan database
    await ProductModel.sync({ force: false });

    console.log("Table created successfully");
  } catch (err) {
    console.error("Error creating table:", err.message);
  }
}

createTableIfNotExists();

module.exports = ProductModel;
