const express = require("express");
const indexRouter = express.Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.indexGet);
indexRouter.get("/categorias", indexController.categoriesGet);
indexRouter.get("/productos", indexController.productsGet);
indexRouter.get("/categorias/:id/delete", indexController.categoriesDelete);

module.exports = indexRouter;
