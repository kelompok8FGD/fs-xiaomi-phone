const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const AddressModel = require("./AddressModel");
const CustomerModel = require("./CustomerModel");
const PaymentMethodModel = require("./PaymentMethodModel");
const CartModel = require("./CartModel");

const CheckoutModel = sequelize.define(
  "CheckoutModel",
  {
    id_checkout: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_address: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_payment_method: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_cart: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "CheckoutModel",
    tableName: "checkout",
    timestamps: true,
  }
);

// Menambahkan pemanggilan sync
async function createTableIfNotExists() {
  try {
    // Sinkronkan model dengan database
    await CheckoutModel.sync({ force: false });

    console.log("Table created successfully");
  } catch (err) {
    console.error("Error creating table:", err.message);
  }
}

createTableIfNotExists();

// Definisikan relasi
CheckoutModel.belongsTo(AddressModel, { foreignKey: "id_address" });
CheckoutModel.belongsTo(CustomerModel, { foreignKey: "id_customer" });
CheckoutModel.belongsTo(PaymentMethodModel, {
  foreignKey: "id_payment_method",
});
CheckoutModel.belongsTo(CartModel, { foreignKey: "id_cart" });

module.exports = CheckoutModel;
