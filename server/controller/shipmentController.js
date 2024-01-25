const db = require("../models");
const ShipmentMethod = db.ShipmentMethodModel;
const { Op } = require("sequelize");

// Get all Shipment methods
const findAllShipments = async (req, res) => {
  try {
    const dataShipmentMethods = await ShipmentMethod.findAll();

    const result = {
      status: "success",
      message: "Success Get All Shipment Method",
      data: dataShipmentMethods,
    };
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Shipment method by ID
const getShipmentMethodById = async (req, res) => {
  try {
    const { id } = req.params;

    const dataShipmentMethod = await ShipmentMethod.findByPk(id);

    if (!dataShipmentMethod) {
      return res.status(404).json({ error: "Shipment method not found" });
    }

    res.json({
      status: "ok",
      message: "Get Shipment ID Successfully",
      data: dataShipmentMethod,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get Shipment by Shipment_type
const getShipmentMethodByShipmentType = async (req, res) => {
  try {
    const { shipment_type } = req.params;

    const dataShipmentType = await ShipmentMethod.findAll({
      where: {
        shipment_type: {
          [Op.like]: `%${shipment_type}%`,
        },
      },
    });

    res.json({
      status: "success",
      message: "Success get shipment method by shipment_type",
      data: dataShipmentType,
    });
  } catch (error) {
    console.error("Error retrieving Shipment by Shipment_Type:", error);
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

// get Shipment by Shipment_price
const getShipmentMethodByShipmentPrice = async (req, res) => {
  try {
    const { shipment_price } = req.params;

    const dataShipmentPrice = await ShipmentMethod.findAll({
      where: {
        shipment_price: {
          [Op.like]: `%${shipment_price}%`,
        },
      },
    });

    res.json({
      status: "success",
      message: "Success get shipment method by shipment_price",
      data: dataShipmentPrice,
    });
  } catch (error) {
    console.error("Error retrieving Shipment by shipment_price:", error);
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

// Create a shipment method
const createNewShipmentMethod = async (req, res) => {
  try {
    const { shipment_type, shipment_price } = req.body;

    // Ambil ID pengguna dari token
    const id_customer = req.id_customer;

    if (!id_customer) {
      return res.status(401).json({
        status: "failed",
        message: "User ID not found in the token",
      });
    }

    details = {
      id_customer,
      shipment_type,
      shipment_price,
    };

    const newShipmentMethod = await ShipmentMethod.create(details);
    res.status(201).json({
      status: "ok",
      data: newShipmentMethod,
    });
  } catch (error) {
    console.log(error, "<<<- Error create new Shipment");
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

// Update Shipment method by ID
const updateShipment = async (req, res, next) => {
  try {
    const shipmentId = req.params.id;

    // Check if shipmentId is valid
    if (!shipmentId) {
      return res.status(400).json({
        status: "failed",
        message: "Invalid shipment ID",
      });
    }

    // Retrieve the existing Shipment data
    const existingShipment = await ShipmentMethod.findByPk(shipmentId);

    // Check if the Shipment exists
    if (!existingShipment) {
      return res.status(404).json({
        status: "failed",
        message: `Shipment with ID ${shipmentId} not found`,
      });
    }

    const updatedShipment = await existingShipment.update(req.body);

    res.json({
      status: "success",
      message: "Shipment Updated Successfully",
      paymentUpdated: updatedShipment,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

// Delete Shipment method by ID
const deleteShipment = async (req, res, next) => {
  try {
    const shipmentId = req.params.id;

    // Check if ShipmentId is valid
    if (!shipmentId) {
      return res.status(400).json({
        status: "failed",
        message: "Invalid Shipment ID",
      });
    }

    const shipmentMethodDeleted = await ShipmentMethod.findByPk(shipmentId);

    const shipmentDeleted = await ShipmentMethod.destroy({
      where: { id_shipment_method: shipmentId },
    });

    if (!shipmentDeleted) {
      return res.status(404).json({ error: "Shipment method not found" });
    }

    res.json({
      status: "success",
      message: "Shipment Deleted Successfully",
      paymentDeleted: shipmentMethodDeleted,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

module.exports = {
  findAllShipments,
  getShipmentMethodById,
  getShipmentMethodByShipmentType,
  getShipmentMethodByShipmentPrice,
  createNewShipmentMethod,
  updateShipment,
  deleteShipment,
};
