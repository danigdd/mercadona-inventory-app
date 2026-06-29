const db = require("../db/queries");

async function indexGet(req, res) {;
  res.render("index");
}

async function categoriesGet(req, res) {
  const categories = await db.getAllCategories();
  res.render("categories", {categories : categories});
}

function productsGet(req, res) {
  res.render("products");
}

module.exports = { indexGet, categoriesGet, productsGet };
