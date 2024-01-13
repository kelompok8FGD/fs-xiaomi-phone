const db = require("../models");
const Cart = db.CartModel;
const Product = db.ProductModel;
const { Op } = require("sequelize");

// Get cart items for the authenticated user
const getCartItems = async (req, res) => {
    try {
      const id_customer = req.id_customer; // Extracted from the token in the middleware
  
      // Get cart items for the authenticated user
      const cartItems = await Cart.findAll({
        where: {
          id_customer,
        },
        include: [{ model: Product }],
      });
  
      res.json({
        status: 'ok',
        data: cartItems,
      });
    } catch (error) {
      console.error('Error getting cart items:', error);
      res.status(500).json({
        status: 'failed',
        message: 'Internal Server Error',
      });
    }
  };

const addToCart = async (req, res) => {
  try {
      const { id_product, qty, price } = req.body;
      const id_customer = req.id_customer; //  customer ID available in req.user

      // Check if the product is already in the cart
      const existingCartItem = await Cart.findOne({
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
          await Cart.create({
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



// Delete product from cart
const deleteFromCart = async (req, res) => {
    try {
      const { id_product } = req.params;
      const id_customer = req.id_customer; // Extracted from the token in the middleware
  
      // Find and delete the cart item for the specified product and customer
      const deletedCartItem = await Cart.destroy({
        where: {
          id_customer,
          id_product,
        },
      });
  
      if (!deletedCartItem) {
        res.status(404).json({
            status: 'failed',
            message: 'Product not found in the cart',
          });
      } else {
        res.json({
          status: 'ok',
          message: 'Product deleted from the cart',
        });
      }
    } catch (error) {
      console.error('Error deleting from cart:', error);
      res.status(500).json({
        status: 'failed',
        message: 'Internal Server Error',
      });
    }
  };

  const clearCart = async (req, res) => {
    try {
        const id_customer = req.id_customer; // Extracted from the token in the middleware

        // Find and delete all cart items for the specified customer
        const deletedCartItems = await Cart.destroy({
            where: {
                id_customer,
            },
        });

        if (!deletedCartItems) {
            res.status(404).json({
                status: 'failed',
                message: 'No items found in the cart',
            });
        } else {
            res.json({
                status: 'ok',
                message: 'Cart cleared successfully',
            });
        }
    } catch (error) {
        console.error('Error clearing the cart:', error);
        res.status(500).json({
            status: 'failed',
            message: 'Internal Server Error',
        });
    }
};

module.exports = {
  getCartItems, 
  addToCart, 
  deleteFromCart,
  clearCart
  };
  