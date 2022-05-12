require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const url = process.env.URL;

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
const locationsRouter = require("./Routes/locations");
server.use("/inventory", inventoryRouter);
server.use("/locations", locationsRouter);

server.get("/", function (req, res, next) {
  res.send("Hello Shopify!!!");
});

server.listen(port, () => {
  console.log(`Shopify server started --> PORT ${port}`);
});
