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

//new category
function categoriesGetNew(req, res) {
    res.render("newCategory.ejs");
}

//post created category
async function categoriesPostNew(req, res){
  const name = await req.body["category_name"];
  db.createCategory(name);
  res.redirect("/categorias");

}
module.exports = {categoriesDelete, categoriesGet, categoriesGetNew, categoriesPostNew};