const express = require("express");
const mongoose = require("mongoose");

const Inventory = require("../Model/inventorydata.js");

const router = express.Router();

// View a list of all inventory.
const getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find();

    res.status(200).json(inventory);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//get one item from iventory by providing its ID.
const getOneItem = async (req, res) => {
    const { id } = req.params;

  try {
    const item = await Inventory.findOne({ id: id });

    res.status(200).json(item);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//POST Item to inventory.
const addInventory = async (req, res) => {
  const newItem = new Inventory({
    name: req.body.name,
    description: req.body.description,
    registered_on: req.body.created_on,
  })
  try {
    await newItem.save();

    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//PUT update inventory item with its ID.
const updateInventory = async (req, res) => {
  const id = req.params.id;
  try {
    await Inventory.findOneAndUpdate(
      {
        id: id,
      },
      {
        name: req.body.name,
        description: req.body.description,
        registered_on: req.body.created_on,
      }
    );
    res.status(202).json({ id: id });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

//delete item from inventory based on ID.
const deleteInventory = async (req, res) => {
  const id = req.params.id;

  try {
    await Inventory.findOneAndRemove({ id: id });
    res.status(203).json({ id: id });
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
};

module.exports.getInventory = getInventory;
module.exports.getOneItem = getOneItem;
module.exports.addInventory = addInventory;
module.exports.updateInventory = updateInventory;
module.exports.deleteInventory = deleteInventory;