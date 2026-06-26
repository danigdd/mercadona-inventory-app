const express = require("express");
const indexRouter = express.Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.indexGet);
indexRouter.get("/categories", indexController.categoriesGet);
indexRouter.get("/products", indexController.productsGet);

module.exports = indexRouter;
