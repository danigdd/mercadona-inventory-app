const express = require("express");
const server = express();
require("dotenv").config();
const path = require("path");
const indexRouter = require("./routes/indexRouter");

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Categorías", path: "/categories" },
  { name: "Productos", path: "/products" },
];

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));

//global middleware
server.use((req, res, next) => {
  res.locals.isActive = (p) => {
    const current = req.path;

    if (p === "/") return current === "/";

    return current === p || current.startsWith(p + "/");
  };
  res.locals.navItems = navItems;
  res.locals.currentPath = req.path;
  next();
});

//routers
server.use("/", indexRouter);

const PORT = process.env.PORT || 3000;

server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running on port ${PORT}`);
});
