const db = require("../db/queries");

async function productsGet(req, res) {
  const products = await db.getAllProducts();
  res.render("products", {products: products});
}

function productsNewGet(req, res) {
  res.render("newProduct");
}

async function productsNewPost(req, res) {
  const body = req.body;
  const category_id = await db.findCategoryId(body.product_category);
  await db.addProduct(body.product_name, body.product_price, category_id, body.photo || '/images/noimage.svg');
  res.redirect("/productos");
}

async function productsDeleteGet(req, res) {
  const {id} = req.params;
  await db.deleteProduct(id);
  res.redirect("/productos");
}

module.exports = {productsGet, productsNewGet, productsNewPost, productsDeleteGet};