const mongoose = require("mongoose");

const Location = require("../Model/locationsdata.js");

const Inventory = require("../Model/inventorydata.js");

/*
created additional controller for the following:
Ability to create warehouses / locations and assign inventory to specific locations
*/

//POST a location.
const addLocation = async (req, res) => {
  const location = new Location({
    name: req.body.name,
    location: req.body.location,
    inventory: req.body.inventory,
  });
  try {
    await location.save();

    res.status(201).json(location);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//POST route to start joining documents (inventory to location)
const locationAddInventory = (req, res) => {
  try {
    Inventory.create(req.body)
      .then(function (dbInventory) {
        return Location.findOneAndUpdate(
          { _id: req.params.id },
          { inventory: dbInventory._id },
          { new: true }
        );
      })
      .then(function (dbLocation) {
        // If we were able to successfully update a location, send it back to the client
        res.json(dbLocation);
      });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Route for retrieving a location by id and populating it's inventory.
const getLocationById = (req, res) => {
    try {
        Location.findOne({ _id: req.params.id })
          .populate("inventory")
          .then(function (dbLocation) {
            res.json(dbLocation);
          });
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// View a list of all locations.
const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();

    res.status(200).json(locations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.addLocation = addLocation;
module.exports.locationAddInventory = locationAddInventory;
module.exports.getLocationById = getLocationById;
module.exports.getAllLocations = getAllLocations;
