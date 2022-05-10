const express = require("express");

const inventory = require("../Controllers/inventoryController");

const router = express.Router();

router.get("/api/inventory", inventory.getInventory);
router.get("/api/inventory/:id", inventory.getOneItem);
router.post("/api/inventory", inventory.addInventory);
router.put("/api/inventory", inventory.updateInventory);
router.delete("/api/inventory/:id", inventory.deleteInventory);

module.exports = router;