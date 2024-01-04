const { Op } = require("sequelize");
const {
  CustomerModel,
  AddressModel,
  CustomerAddressModel,
} = require("../models");
// const { Sequelize } = require("sequelize");

//Menampilkan Alamat yang dimiliki customer
const getCustomerAddresses = async (req, res) => {
  try {
    const dataCustomerAddress = await CustomerAddressModel.findAll({
      include: [
        {
          model: CustomerModel,
          attributes: ["fullname"],
        },
        {
          model: AddressModel,
          attributes: [
            "address_name",
            "address_line1",
            "address_line2",
            "city",
            "region",
            "postal_code",
          ],
        },
      ],
      attributes: ["id_customer", "id_address"],
    });
    const result = {
      status: "ok",
      data: dataCustomerAddress,
    };
    res.json(result);
  } catch (error) {
    console.error("Error fetching customer addresses:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

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
  getCustomerAddresses,
};
