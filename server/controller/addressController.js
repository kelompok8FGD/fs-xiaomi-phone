const { Op } = require("sequelize");
const { AddressModel } = require("../models");
// const { CustomerModel } = require("../models");

//Menambahkan Alamat Baru
const createNewAddress = async (req, res) => {
  try {
    const {
      address_name,
      province,
      city,
      subdistrict,
      villages,
      full_address,
      postal_code,
      phone_number,
    } = req.body;

    // Ambil ID pengguna dari token
    const id_customer = req.id_customer;

    // Pastikan ID pengguna ada
    if (!id_customer) {
      return res.status(401).json({
        status: "failed",
        message: "User ID not found in the token",
      });
    }

    details = {
      id_customer,
      address_name,
      province,
      city,
      subdistrict,
      villages,
      full_address,
      postal_code,
      phone_number,
    };

    const newAddress = await AddressModel.create(details);

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

// Update address
const updateAddress = async (req, res, next) => {
  try {
    const addressId = req.params.id;

    // Check if addressId is valid
    if (!addressId) {
      return res.status(400).json({
        status: "failed",
        message: "Invalid address ID",
      });
    }

    // Retrieve the existing address data
    const existingAddress = await AddressModel.findByPk(addressId);

    // Check if the address exists
    if (!existingAddress) {
      return res.status(404).json({
        status: "failed",
        message: `Address with ID ${addressId} not found`,
      });
    }

    // Update the Address with the new data from the request body
    const updatedAddress = await existingAddress.update(req.body);

    res.json({
      status: "success",
      message: "Address updated successfully",
      addressBeforeUpdate: existingAddress,
      addressUpdated: updatedAddress,
    });
  } catch (error) {
    console.error(error, "<< Error updating Address");
    next(error); // Pass the error to the next middleware (error handler)
  }
};

// Menghapus address berdasarkan ID
const deleteAddress = async (req, res, next) => {
  try {
    const addressId = req.params.id;

    // Check if AddressId is valid
    if (!addressId) {
      return res.status(400).json({
        status: "failed",
        message: "Invalid Address ID",
      });
    }

    const addressDataDeleted = await AddressModel.findByPk(addressId);

    // Use AddressModel.destroy with a where clause to delete the Address
    const addressDeleted = await AddressModel.destroy({
      where: { id_address: addressId },
    });

    // Check if any rows were affected (Address deleted)
    if (addressDeleted === 0) {
      return res.status(404).json({
        status: "failed",
        message: `Address with ID ${addressId} not found`,
      });
    }

    res.json({
      status: "success",
      message: "address deleted successfully",
      addressDeleted: addressDataDeleted,
    });
  } catch (error) {
    console.error(error, "<< Error deleting address");
    next(error); // Pass the error to the next middleware (error handler)
  }
};

//Menampilkan semua Address
const findAllAddresss = async (req, res) => {
  try {
    const dataAddresss = await AddressModel.findAll();

    const result = {
      status: "ok",
      data: dataAddresss,
    };
    res.json(result);
  } catch (error) {
    console.log(error, "<<<-- Error find all Addresss");
  }
};

//Menampilkan Address berdasarkan ID
const getAddressById = async (req, res) => {
  try {
    //mendapatkan req params
    const { id } = req.params;

    const dataAddress = await AddressModel.findByPk(id);
    if (dataAddress === null) {
      return res.status(404).json({
        status: "failed",
        message: `data Address with id ${id} is not found`,
      });
    }
    res.json({
      status: "ok",
      data: dataAddress,
    });
  } catch (error) {
    console.log(error, "<<<- error get Address by id");
  }
};

const getAddressByTokenId = async (req, res) => {
  try {
    // Dapatkan req params
    const id_customer = req.id_customer; // Diambil dari token di middleware

    // Dapatkan semua data alamat untuk ID pelanggan tertentu
    const dataAddresses = await AddressModel.findAll({
      where: { id_customer },
      attributes: [
        "address_name",
        "province",
        "city",
        "subdistrict",
        "villages",
        "full_address",
        "postal_code",
        "phone_number",
      ],
    });

    if (dataAddresses.length === 0) {
      return res.status(404).json({
        status: "failed",
        message: `No addresses found for customer with id ${id_customer}`,
      });
    }

    res.json({
      status: "ok",
      data: dataAddresses,
    });
  } catch (error) {
    console.log(error, "<<<- error get Address by id");
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

const checkAddress = async (req, res) => {
  try {
    const id_customer = req.id_customer;

    // Pastikan ID pengguna ada
    if (!id_customer) {
      return res.status(401).json({
        status: "failed",
        message: "User ID not found in the token",
      });
    }

    // Mencari alamat berdasarkan ID pengguna
    const userAddresses = await AddressModel.findAll({
      where: { id_customer },
    });

    res.json({
      status: "ok",
      data: userAddresses,
    });
  } catch (error) {
    console.error(error, "<< Error getting addresses by user");
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createNewAddress,
  updateAddress,
  deleteAddress,
  findAllAddresss,
  getAddressById,
  checkAddress,
  getAddressByTokenId,
};
