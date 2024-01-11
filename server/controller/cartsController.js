const db = require("../models");
const Cart = db.CartModel;
const { Op } = require("sequelize");

//Menampilkan semua cart
const findAllCarts = async (req, res) => {
    try {
      const dataCarts = await Cart.findAll();
  
      const result = {
        status: "ok",
        data: dataCarts,
      };
      res.json(result);
    } catch (error) {
      console.log(error, "<<<-- Error finding all carts");
    }
  };

module.exports = {
    findAllCarts,
  };
  