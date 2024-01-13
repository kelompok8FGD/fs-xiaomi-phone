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

const getCustomerAddressesByIdCustomer = async (req, res) => {
  try {
    const { address_id } = req.params; // Ambil customer_id dari parameter URL

    const dataCustomerAddress = await CustomerAddressModel.findAll({
      where: { id_address: address_id }, // Menambahkan kondisi pencarian berdasarkan customer_id
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

    if (dataCustomerAddress.length === 0) {
      // Jika tidak ada alamat untuk customer_id tertentu
      res
        .status(404)
        .json({ error: "Alamat tidak ditemukan untuk customer_id tersebut" });
      return;
    }

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

const getCustomerAddressesByIdAddress = async (req, res) => {
  try {
    const { customer_id } = req.params; // Ambil customer_id dari parameter URL

    const dataCustomerAddress = await CustomerAddressModel.findAll({
      where: { id_customer: customer_id }, // Menambahkan kondisi pencarian berdasarkan customer_id
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

    if (dataCustomerAddress.length === 0) {
      // Jika tidak ada alamat untuk customer_id tertentu
      res
        .status(404)
        .json({ error: "Alamat tidak ditemukan untuk customer_id tersebut" });
      return;
    }

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

module.exports = {
  getCustomerAddresses,
  getCustomerAddressesByIdCustomer,
  getCustomerAddressesByIdAddress,
};
