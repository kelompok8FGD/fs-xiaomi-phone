const { Op } = require("sequelize");
const { AddressModel } = require("../models");

//Menambahkan Alamat Baru
const createNewAddress = async (req, res) => {
  try {
    const {
      address_name,
      address_line1,
      address_line2,
      city,
      region,
      postal_code,
    } = req.body;

    const newAddress = await AddressModel.create({
      address_name,
      address_line1,
      address_line2,
      city,
      region,
      postal_code,
    });

    res.status(201).json({
      status: "ok",
      data: newAddress,
    });
  } catch (error) {
    console.log(error, "<<<- Error create new address");
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createNewAddress,
};
