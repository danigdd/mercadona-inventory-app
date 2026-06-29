const db = require("../db/queries");

async function categoriesGet(req, res) {
  const categories = await db.getAllCategories();
  res.render("categories", {categories : categories});
}

async function categoriesDelete(req, res) {
  const id = req.params.id;
  await db.deleteCategory(id);
  res.redirect("/categorias");
}

module.exports = {categoriesDelete, categoriesGet};