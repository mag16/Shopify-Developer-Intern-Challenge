const express = require("express");
const cors = require("cors");
const port = 5000;

const server = express();
server.use(express.json());
server.use(cors({}));

// GET all items in inventory