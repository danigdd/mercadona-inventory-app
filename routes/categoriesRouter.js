const express = require("express");
const categoriesRouter = express.Router();
const categoriesController = require("../controllers/categoriesController");

categoriesRouter.get("/", categoriesController.categoriesGet);
categoriesRouter.get("/:id/delete", categoriesController.categoriesDelete);
categoriesRouter.get("/nueva", categoriesController.categoriesGetNew);
categoriesRouter.post("/nueva", categoriesController.categoriesPostNew);
module.exports = categoriesRouter;