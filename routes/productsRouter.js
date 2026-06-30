const express = require("express");
const productsRouter = express.Router();
const productsController = require("../controllers/productsController");

productsRouter.get("/", productsController.productsGet);
productsRouter.get("/nuevo", productsController.productsNewGet);
productsRouter.post("/nuevo", productsController.productsNewPost);

module.exports = productsRouter;