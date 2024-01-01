const { Product } = require("../models");

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

const createNewProduct = async (req, res) => {
  try {
    const {
      name_product,
      image,
      spesification,
      price,
      stock,
      discount,
      category_ID,
    } = req.body;

    const newProduct = await Product.create({
      name_product,
      image,
      spesification,
      price,
      stock,
      discount,
      category_ID,
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

module.exports = { findAllProducts, getProductById, createNewProduct };
