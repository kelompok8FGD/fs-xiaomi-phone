const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const CustomerModel = require("./CustomerModel");

const PaymentMethodModel = sequelize.define(
  "PaymentMethodModel",
  {
    id_payment_method: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    payment_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    provider: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    account_number: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "PaymentMethodModel",
    tableName: "payment_method",
    timestamps: true,
  }
);

// Menambahkan pemanggilan sync
// PaymentMethodModel.sync({ force: true })
//   .then(() => {
//     console.log("Table created successfully");
//   })
//   .catch((err) => {
//     console.error("Error creating table:", err.message);
//   });

// Definisikan relasi
CustomerModel.hasOne(PaymentMethodModel, {
  foreignKey: {
    name: "id_customer",
    field: "id_customer",
  },
});
PaymentMethodModel.belongsTo(CustomerModel, {
  foreignKey: {
    name: "id_customer",
    field: "id_customer",
  },
});

module.exports = PaymentMethodModel;
