const db = require("../models");
const Customer = db.CustomerModel;
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const validator = require("validator");

//Menampilkan semua customer
const findAllCustomers = async (req, res) => {
  try {
    const dataCustomers = await Customer.findAll();

    const result = {
      status: "ok",
      data: dataCustomers,
    };
    res.json(result);
  } catch (error) {
    console.log(error, "Error finding all customers");
  }
};

//Menampilkan customer berdasarkan ID
const getCustomerById = async (req, res) => {
  try {
    //mendapatkan req params
    const { id } = req.params;

    const dataCustomer = await Customer.findByPk(id);
    if (dataCustomer === null) {
      return res.status(404).json({
        status: "failed",
        message: `Customer with id ${id} was not found`,
      });
    }
    res.json({
      status: "ok",
      data: dataCustomer,
    });
  } catch (error) {
    console.log(error, " error getting customer by id");
  }
};


const isStrongPasswordCustom = (password) => {

  return password.length >= 6;
};

const createNewCustomer = async (req, res) => {
  try {
    const { email, password, fullname } = req.body;

    // Check emptiness of the incoming data
    if (!email || !password || !fullname) {
      return res.json({ message: "Please enter all the details" });
    }

    // Check if the email is valid
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Email is not valid" });
    }
    if (!isStrongPasswordCustom(password)) {
      return res.status(400).json({
        message: "Password is not strong enough.",
      });
    }
    // Check if the user already exists
    const userExists = await Customer.findOne({ where: { email } });

    if (userExists) {
      return res.status(400).json({
        message: "This email is already in use. Use a different one.",
      });
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create a new customer
    const newCustomer = await Customer.create({
      email,
      password: hashPassword,
      fullname,
    });

    res.json(newCustomer);
  } catch (error) {
    console.error("Error creating new customer:", error);
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

const loginCustomer = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Validation
    
    // Check emptiness of the incoming data
    if (!email || !password) {
      return res.json({ message: "Please enter all the details" });
    }
 

    // Check email match
    const user = await Customer.findOne({ where: { email } });

    const passwordMatched =
      user === null
        ? false
        : // COMPARE USER PASSWORD WITH USER HASPASSWORD IN DB
          await bcrypt.compare(password, user.password);
    if (!(user && passwordMatched)) {
      res.status(401).json({
        error: "User or password is invalid",
      });
    }
    const userForToken = {
      id: user.id_customer,
      email: user.email,
    };
    // Generate a JWT token for the authenticated customer
    const token = sign(userForToken, process.env.SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    res.send({
      email: user.email,
      fullname: user.fullname,
      token,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  findAllCustomers,
  getCustomerById,
  createNewCustomer,
  loginCustomer,
};
