const express = require("express");
const categoriesRouter = express.Router();
const categoriesController = require("../controllers/categoriesController");

categoriesRouter.get("/", categoriesController.categoriesGet);
categoriesRouter.get("/:id/delete", categoriesController.categoriesDelete);

module.exports = categoriesRouter;