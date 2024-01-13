const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const CustomerModel = require("./CustomerModel");
const AddressModel = require("./AddressModel");

const CustomerAddressModel = sequelize.define(
  "CustomerAddressModel",
  {
    id_customer: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false, // Nonaktifkan auto-increment
    },
    id_address: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false, // Nonaktifkan auto-increment
    },
  },
  {
    sequelize,
    modelName: "CustomerAddressModel",
    tableName: "customer_address",
    timestamps: false,
  }
);
// Menambahkan pemanggilan sync
async function createTableIfNotExists() {
  try {
    // Sinkronkan model dengan database
    await CustomerAddressModel.sync({ force: false });

    console.log("Table created successfully");
  } catch (err) {
    console.error("Error creating table:", err.message);
  }
}

createTableIfNotExists();

// Definisikan relasi

// Hubungan antara CustomerModel dan CustomerAddressModel
CustomerModel.hasMany(CustomerAddressModel, { foreignKey: "id_customer" });
CustomerAddressModel.belongsTo(CustomerModel, { foreignKey: "id_customer" });

// Hubungan antara AddressModel dan CustomerAddressModel
AddressModel.hasMany(CustomerAddressModel, { foreignKey: "id_address" });
CustomerAddressModel.belongsTo(AddressModel, { foreignKey: "id_address" });

module.exports = CustomerAddressModel;
