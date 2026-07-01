const db = require("../db/queries");
const {body, validationResult, matchedData} = require('express-validator');

const alphaErr = "debe contener solo letras";
const lengthErr = "debe estar entre 1 y 15 carácteres";
const priceValueErr = "debe ser mayor de 0";
const categoryErr = "debes seleccionar una categoría";
const photoErr = "debe ser un link válido";

const validateUser = [
  body("product_name")
  .trim()
  .notEmpty()
  .withMessage("El nombre del producto no debe estar vacío")
  .bail()
  .isAlpha()
  .withMessage(`El nombre del producto ${alphaErr}`)
  .isLength({min: 1, max: 10})
  .withMessage(`El nombre del producto ${lengthErr}`),

  body("product_price")
  .notEmpty()
  .withMessage("El precio del producto no debe ser vacío")
  .bail()
  .matches(/^\d+\.\d{2}$/)
  .withMessage("El precio debe tener el formato 0.00")
  .isFloat({min: 0})
  .withMessage(`El precio del producto ${priceValueErr}`),

  body("product_category")
  .notEmpty()
  .withMessage("Debes seleccionar una categoría"),
  
  body("product_photo")
  .optional({ values : "falsy" })
  .isURL()
  .withMessage(`El enlace de la foto del producto ${photoErr}`),
];


async function productsGet(req, res) {
  const products = await db.getAllProducts();
  res.render("products", {products: products});
}

function productsNewGet(req, res) {
  res.render("newProduct");
}

const productsNewPost = [validateUser, async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).render("newProduct", {errors_product: errors.array()});
  }
  console.log("sigo?");

  const body = req.body;
  const category_id = await db.findCategoryId(body.product_category);
  await db.addProduct(body.product_name, body.product_price, category_id, body.product_photo || '/images/noimage.svg');
  res.redirect("/productos");
}]

async function productsDeleteGet(req, res) {
  const {id} = req.params;
  await db.deleteProduct(id);
  res.redirect("/productos");
}

module.exports = {productsGet, productsNewGet, productsNewPost, productsDeleteGet};