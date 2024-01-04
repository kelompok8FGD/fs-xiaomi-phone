const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const CustomerModel = sequelize.define(
  "CustomerModel",
  {
    id_customer: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    fullname: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "CustomerModel",
    tableName: "customers",
    timestamps: true,
  }
);

// Menambahkan pemanggilan sync
// CustomerModel.sync({ force: true })
//   .then(() => {
//     console.log("Table created successfully");
//   })
//   .catch((err) => {
//     console.error("Error creating table:", err.message);
//   });

module.exports = CustomerModel;
