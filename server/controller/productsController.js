// const { upload } = require('../config/multerConfig');
const db = require("../models");
const Product = db.ProductModel;
const { Op } = require("sequelize");

//Menampilkan semua product
const findAllProducts = async (req, res) => {
  try {
    const dataProducts = await Product.findAll();

    const result = {
      status: "ok",
      data: dataProducts,
    };
    res.json(result);
  } catch (error) {
    console.log(error, "<<<-- Error find all products");
  }
};

//Menampilkan product berdasarkan ID
const getProductById = async (req, res) => {
  try {
    //mendapatkan req params
    const { id } = req.params;

    const dataProduct = await Product.findByPk(id);
    if (dataProduct === null) {
      return res.status(404).json({
        status: "failed",
        message: `data product with id ${id} is not found`,
      });
    }
    res.json({
      status: "ok",
      data: dataProduct,
    });
  } catch (error) {
    console.log(error, "<<<- error get product by id");
  }
};

//Menampilkan product berdasarkan kategory
const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const products = await Product.findAll({
      where: {
        category_product: {
          [Op.like]: `%${category}%`,
        },
      },
    });

    res.json({
      status: "success",
      data: products,
    });
  } catch (error) {
    console.error("Error retrieving products by category:", error);
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

//Menambahkan Product Baru
const createNewProduct = async (req, res) => {
  try {
    const {
      name_product,
      category_product,
      image,
      specification,
      price,
      stock,
      discount,
    } = req.body;

    const newProduct = await Product.create({
      name_product,
      category_product,
      image,
      specification,
      price,
      stock,
      discount,
    });

    res.status(201).json({
      status: "ok",
      data: newProduct,
    });
  } catch (error) {
    console.log(error, "<<<- Error create new product");
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

// Update Product
const updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;

    // Check if productId is valid
    if (!productId) {
      return res.status(400).json({
        status: "failed",
        message: "Invalid product ID",
      });
    }

    // Retrieve the existing product data
    const existingProduct = await Product.findByPk(productId);

    // Check if the product exists
    if (!existingProduct) {
      return res.status(404).json({
        status: "failed",
        message: `Product with ID ${productId} not found`,
      });
    }

    // Update the product with the new data from the request body
    const updatedProduct = await existingProduct.update(req.body);

    res.json({
      status: "success",
      message: "Product updated successfully",
      productBeforeUpdate: existingProduct,
      productUpdated: updatedProduct,
    });
  } catch (error) {
    console.error(error, "<< Error updating product");
    next(error); // Pass the error to the next middleware (error handler)
  }
};

// Menghapus product berdasarkan ID
const deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;

    // Check if productId is valid
    if (!productId) {
      return res.status(400).json({
        status: "failed",
        message: "Invalid product ID",
      });
    }

    const productDataDeleted = await Product.findByPk(productId);

    // Use ProductModel.destroy with a where clause to delete the product
    const productDeleted = await Product.destroy({
      where: { id_product: productId },
    });

    // Check if any rows were affected (product deleted)
    if (productDeleted === 0) {
      return res.status(404).json({
        status: "failed",
        message: `Product with ID ${productId} not found`,
      });
    }

    res.json({
      status: "success",
      message: "Product deleted successfully",
      productDeleted: productDataDeleted,
    });
  } catch (error) {
    console.error(error, "<< Error deleting product");
    next(error); // Pass the error to the next middleware (error handler)
  }
};

module.exports = {
  findAllProducts,
  getProductById,
  getProductsByCategory,
  createNewProduct,
  deleteProduct,
  updateProduct,
};
