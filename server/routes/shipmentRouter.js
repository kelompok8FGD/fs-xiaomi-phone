const shipmentMethod = require("../controller/shipmentController");
const AuthMiddleware = require("../middleware/AuthMiddleware");

const router = require("express").Router();

// route Shipment
// get All Shipment Method
router.get("/shipmentMethods", shipmentMethod.findAllShipments);
// get Shipment method by id
router.get("/shipmentMethods/:id", shipmentMethod.getShipmentMethodById);
// get Shipment method by Shipment_type
router.get(
  "/shipmentMethods/shipment_type/:shipment_type",
  shipmentMethod.getShipmentMethodByShipmentType
);
// get Shipment method by Shipment_price
router.get(
  "/shipmentMethods/shipment_price/:shipment_price",
  shipmentMethod.getShipmentMethodByShipmentPrice
);
// create Shipment method
router.post(
  "/shipmentMethods",
  AuthMiddleware,
  shipmentMethod.createNewShipmentMethod
);
// update Shipment method
router.put(
  "/shipmentMethods/:id",
  AuthMiddleware,
  shipmentMethod.updateShipment
);
// delete Shipment method
router.delete(
  "/shipmentMethods/:id",
  AuthMiddleware,
  shipmentMethod.deleteShipment
);

module.exports = router;
