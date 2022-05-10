const express = require("express");

const inventory = require("../Controllers/inventoryController");

const router = express.Router();

router.get("/", inventory.getInventory);
router.get("/:id", inventory.getOneItem);
router.post("/", inventory.addInventory);
router.put("/:id", inventory.updateInventory);
router.delete("/:id", inventory.deleteInventory);

module.exports = router;