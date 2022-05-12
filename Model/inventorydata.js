const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  registered_on: {
    type: Date,
    default: new Date(),
  },
});


let inventory = mongoose.model("inventory", inventorySchema);

module.exports = inventory;