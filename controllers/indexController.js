const db = require("../db/queries");

async function indexGet(req, res) {
  const rows = await db.getAllProducts();
  console.log(rows);
  res.render("index");
}

function categoriesGet(req, res) {
  res.render("categories");
}

function productsGet(req, res) {
  res.render("products");
}

module.exports = { indexGet, categoriesGet, productsGet };
