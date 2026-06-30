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
  const product_id = await db.findCategoryId(body.product_name);

  await db.addProduct(body.product_name, body.product_price, body.product_id, body.photo || 'https://es.wikipedia.org/wiki/Trollface');
  res.redirect("/productos");
}

module.exports = {productsGet, productsNewGet, productsNewPost};