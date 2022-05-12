const express = require("express");

const locations = require("../Controllers/locationsController");

const router = express.Router();

router.post("/", locations.addLocation);
router.get("/", locations.getAllLocations);
router.get("/:id", locations.getLocationById);
router.post("/:id", locations.locationAddInventory);

module.exports = router;
