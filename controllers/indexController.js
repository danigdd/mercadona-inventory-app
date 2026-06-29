const db = require("../db/queries");

async function indexGet(req, res) {;
  res.render("index");
}

async function categoriesGet(req, res) {
  const categories = await db.getAllCategories();
  res.render("categories", {categories : categories});
}

async function productsGet(req, res) {
  const products = await db.getAllProducts();
  res.render("products", {products: products});
}

async function categoriesDelete(req, res) {
  const id = req.params.id;
  await db.deleteCategory(id);
  res.redirect("/categorias");
}

module.exports = { indexGet, categoriesGet, productsGet, categoriesDelete };
