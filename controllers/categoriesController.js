const db = require("../db/queries");
const {body, validationResult, matchedData} = require("express-validator");

const alphaErr = "debe contener solo letras";
const lengthErr = "debe estar entre 1 y 15 carácteres";

const validateUser = [
  body("category_name").trim()
  .isAlpha()
  .withMessage(`El nombre de la categoría ${alphaErr}`)
  .isLength({min: 1, max: 10})
  .withMessage(`El nombre de la categoría ${lengthErr}`),
];

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
categoriesPostNew = [validateUser, async (req, res) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    return res.status(400).render("newCategory", {
      errors: errors.array()
    });
  }

  const name = await req.body["category_name"];
  db.createCategory(name);
  res.redirect("/categorias");
}
];

module.exports = {categoriesDelete, categoriesGet, categoriesGetNew, categoriesPostNew};