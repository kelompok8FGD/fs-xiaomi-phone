require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "xiaomi_dev",
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false, // Nonaktifkan logging query SQL
  }
);

module.exports = sequelize;
