const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const CustomerModel = require("./CustomerModel");

const SaveTimer = sequelize.define(
  "SaveTimer",
  {
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "SaveTimer",
    tableName: "save_timer",
    timestamps: true,
  }
);

CustomerModel.hasMany(SaveTimer, {
  foreignKey: {
    name: "id_customer",
    field: "id_customer",
  },
});
SaveTimer.belongsTo(CustomerModel, {
  foreignKey: {
    name: "id_customer",
    field: "id_customer",
  },
});
// Menambahkan pemanggilan sync
async function createTableIfNotExists() {
  try {
    // Sinkronkan model dengan database
    await SaveTimer.sync({ force: false });

    console.log("Table created successfully");
  } catch (err) {
    console.error("Error creating table:", err.message);
  }
}

createTableIfNotExists();

module.exports = SaveTimer;
