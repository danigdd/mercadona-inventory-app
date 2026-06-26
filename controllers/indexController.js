function indexGet(req, res) {
  res.render("index");
}

function categoriesGet(req, res) {
  res.render("categories");
}

function productsGet(req, res) {
  res.render("products");
}

module.exports = { indexGet, categoriesGet, productsGet };
