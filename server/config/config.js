require("dotenv").config();
const fs = require("fs");

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "xiaomi_dev",
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "xiaomi_test",
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  production: {
    username: "root",
    password: null,
    database: "xiaomi_production",
    host: "127.0.0.1",
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
};
