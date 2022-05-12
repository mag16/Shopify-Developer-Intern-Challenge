const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3000;
const url ="mongodb+srv://MAG16:yuwe3yR4e6qD9wtd@cluster0.x6sia.mongodb.net/INVENTORYDB?retryWrites=true&w=majority";

const server = express();
server.use(cors({}));


mongoose.connect(url, { useNewUrlParser: true });
const connect = mongoose.connection;

server.use(express.json());
try {
  connect.on("open", () => {
    console.log("connected");
  });
} catch (error) {
  console.log(error);
}

const inventoryRouter = require("./Routes/inventory");
const locationsRouter = require("./Routes/locations")
server.use("/inventory", inventoryRouter);
server.use("/locations", locationsRouter);

server.listen(port, () => {
    console.log(`Shopify server started --> PORT ${port}`)
})

