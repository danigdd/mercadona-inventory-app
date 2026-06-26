const express = require("express");
const server = express();
require("dotenv").config();
const path = require("path");
const indexRouter = require("./routes/indexRouter");

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));

//routers
server.use("/", indexRouter);

const PORT = process.env.PORT || 3000;

server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running on port ${PORT}`);
});
