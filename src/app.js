const express = require("express");
const controllers = require("./controllers");
const path = require("path");

const exphbs = require("express-handlebars");

const app = express();

app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main"
  })
);
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(controllers);

module.exports = app;
