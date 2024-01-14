const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const ProductModel = require("./ProductModel");
const CustomerModel = require("./CustomerModel");

const CartModel = sequelize.define(
  "CartModel",
  {
    id_cart: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "CartModel",
    tableName: "carts",
    timestamps: false,
  }
);

// Menambahkan pemanggilan sync
async function createTableIfNotExists() {
  try {
    // Sinkronkan model dengan database
    await CartModel.sync({ force: false });

    console.log("Table created successfully");
  } catch (err) {
    console.error("Error creating table:", err.message);
  }
}

createTableIfNotExists();

// // Define relationships
ProductModel.hasMany(CartModel, {
  foreignKey: {
    name: "id_product",
    field: "id_product",
  },
});
CartModel.belongsTo(ProductModel, {
  foreignKey: {
    name: "id_product",
    field: "id_product",
  },
});

CustomerModel.hasOne(CartModel, {
  foreignKey: {
    name: "id_customer",
    field: "id_customer",
  },
});
CartModel.belongsTo(CustomerModel, {
  foreignKey: {
    name: "id_customer",
    field: "id_customer",
  },
});

module.exports = CartModel;
