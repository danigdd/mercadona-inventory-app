const db = require("../db/queries");

async function indexGet(req, res) {;
  res.render("index");
}


module.exports = { indexGet };
