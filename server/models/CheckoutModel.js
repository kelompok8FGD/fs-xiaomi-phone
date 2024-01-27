const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const AddressModel = require("./AddressModel");
const CustomerModel = require("./CustomerModel");
const PaymentMethodModel = require("./PaymentMethodModel");
const ProductModel = require("./ProductModel");
const ShipmentMethodModel = require("./ShipmentMethodModel");

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
    id_shipment_method: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_product: {
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
    await CheckoutModel.sync({ force: true });

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
CheckoutModel.belongsTo(ShipmentMethodModel, {
  foreignKey: "id_shipment_method",
});
CheckoutModel.belongsTo(ProductModel, { foreignKey: "id_product" });

module.exports = CheckoutModel;
