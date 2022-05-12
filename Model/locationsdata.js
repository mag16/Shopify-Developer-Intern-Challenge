const mongoose = require("mongoose");
 //Schema created for warehouse locations assign inventory items to specific locations
const Schema = mongoose.Schema;
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
  inventory: {
    type: Schema.Types.ObjectId,
    ref: "inventory", //used to be able to move inventory collections to our locations (one to one).
  },
});

let locations = mongoose.model("locations", locationsSchema);

module.exports = locations;