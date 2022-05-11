const mongoose = require("mongoose");
 
const locationsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    unique: true,
  },
  inventory_item: {
    type: Schema.Types.ObjectId,
    ref: "inventorydata",
  },
});

let locations = mongoose.model("locations", locationsSchema);

module.exports = locations;