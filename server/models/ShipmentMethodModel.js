const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const CustomerModel = require("./CustomerModel");

const ShipmentMethodModel = sequelize.define(
  "ShipmentMethodModel",
  {
    id_shipment_method: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shipment_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    shipment_price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "ShipmentMethodModel",
    tableName: "shipment_method",
    timestamps: true,
  }
);

// Menambahkan pemanggilan sync
// Menambahkan pemanggilan sync
async function createTableIfNotExists() {
  try {
    // Sinkronkan model dengan database
    await ShipmentMethodModel.sync({ force: false });

    console.log("Table created successfully");
  } catch (err) {
    console.error("Error creating table:", err.message);
  }
}

createTableIfNotExists();

// Definisikan relasi
CustomerModel.hasOne(ShipmentMethodModel, {
  foreignKey: {
    name: "id_customer",
    field: "id_customer",
  },
});
ShipmentMethodModel.belongsTo(CustomerModel, {
  foreignKey: {
    name: "id_customer",
    field: "id_customer",
  },
});

module.exports = ShipmentMethodModel;
