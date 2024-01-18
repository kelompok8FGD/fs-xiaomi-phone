const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const CustomerModel = require("./CustomerModel");

const AddressModel = sequelize.define(
  "AddressModel",
  {
    id_address: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    address_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    address_line1: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    address_line2: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    postal_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "AddressModel",
    tableName: "Address",
    timestamps: false,
  }
);

// Hubungan antara CustomerModel dan CustomerAddressModel
AddressModel.hasMany(CustomerModel, { foreignKey: "id_customer" });
CustomerModel.belongsTo(AddressModel, { foreignKey: "id_customer" });

// Menambahkan pemanggilan sync
async function createTableIfNotExists() {
  try {
    // Sinkronkan model dengan database
    await AddressModel.sync({ force: true });

    console.log("Table created successfully");
  } catch (err) {
    console.error("Error creating table:", err.message);
  }
}

createTableIfNotExists();

module.exports = AddressModel;
