const db = require("../models");
const Cart = db.CartModel;
const { Op } = require("sequelize");

const addToCart = async (req, res) => {
  try {
      const { id_product, qty, price } = req.body;
      const id_customer = req.user.id; //  customer ID available in req.user

      // Check if the product is already in the cart
      const existingCartItem = await CartModel.findOne({
          where: {
              id_product,
              id_customer,
          },
      });

      if (existingCartItem) {
          // If the product is already in the cart, update the quantity
          existingCartItem.qty += qty;
          await existingCartItem.save();
      } else {
          // If the product is not in the cart, add a new entry
          await CartModel.create({
              id_product,
              id_customer,
              qty,
              price,
          });
      }

      res.json({
          status: "ok",
          message: "Item added to the cart successfully",
      });
  } catch (error) {
      console.error("Error adding item to cart:", error);
      res.status(500).json({
          status: "failed",
          message: "Internal Server Error",
      });
  }
};


const getCartItems = async (req, res) => {
  try {
      const id_customer = req.id_customer;

      const cartItems = await Cart.findAll({
          where: {
              id_customer,
          },
      });

      res.json({
          status: "ok",
          data: cartItems,
      });
  } catch (error) {
      console.error("Error getting cart items:", error);
      res.status(500).json({
          status: "failed",
          message: "Internal Server Error",
      });
  }
};

module.exports = {
  addToCart,  
  getCartItems
  };
  