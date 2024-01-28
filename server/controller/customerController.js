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

const isStrongPassword = (password) => {
  // Check if the password has at least 8 characters and at most 16 characters
  return validator.isLength(password, { min: 8, max: 16 });
};

const isAlphanumericPassword = (password) => {
  // Check if the password contains both letters and numbers
  return /[a-zA-Z]/.test(password) && /\d/.test(password);
};
const createNewCustomer = async (req, res) => {
  try {
    const { email, password, fullname } = req.body;

    // Check emptiness of the incoming data
    if (!email || !password || !fullname) {
      return res.json({ error: "One or more missing details" });
    }

    // Check if the email is valid
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Email is not valid" });
    }
    if (!isStrongPassword(password)) {
      return res.status(400).json({
        error: "Password must be 8 to 16 characters long",
      });
    }

    if (!isAlphanumericPassword(password)) {
      return res.status(400).json({
        error: "Password must include both numbers and letters.",
      });
    }

    // Check if the user already exists
    const userExists = await Customer.findOne({ where: { email } });

    if (userExists) {
      return res.status(400).json({
        error: "This email is already in use. Use a different one.",
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
      return res.json({ error: "Please enter all the details" });
    }

    // Check email match
    const user = await Customer.findOne({ where: { email } });

    const passwordMatched =
      user === null
        ? false
        : // COMPARE USER PASSWORD WITH USER HASPASSWORD IN DB
          await bcrypt.compare(password, user.password);
    if (!(user && passwordMatched)) {
      return res.status(401).json({
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

// Delete Customer by Email from localStorage

const deleteepuser = async (req, res, next) => {
  try {
    // Retrieve the email from the request body
    const { userEmail } = req.body;

    // Check if userEmail exists in the request body
    if (!userEmail) {
      return res.status(400).json({
        status: "failed",
        error: "Email not provided in the request body",
      });
    }

    // Find the customer with the given email
    const customerToDelete = await Customer.findOne({
      where: { email: userEmail },
    });

    // Check if customer exists
    if (!customerToDelete) {
      return res.status(404).json({
        status: "failed",
        error: `Customer with email ${userEmail} not found`,
      });
    }

    // Use CustomerModel.destroy with a where clause to delete the customer
    const customerDeleted = await Customer.destroy({
      where: { email: userEmail },
    });

    // Check if any rows were affected (customer deleted)
    if (customerDeleted === 0) {
      return res.status(404).json({
        status: "failed",
        error: `Customer with email ${userEmail} not found`,
      });
    }

    res.json({
      status: "success",
      error: "Customer deleted successfully",
      customerDeleted: customerToDelete,
    });
  } catch (error) {
    console.error(error, "<< Error deleting customer");
    next(error); // Pass the error to the next middleware (error handler)
  }
};




module.exports = {
  findAllCustomers,
  getCustomerById,
  createNewCustomer,
  loginCustomer,
  deleteepuser,
};
