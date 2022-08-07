const path = require("path");
const express = require("express");
const methodOverride = require('method-override')
const morgan = require("morgan");
const slugify = require('slugify')
const handlebars = require("express-handlebars");

const route = require("./routes");
const db = require("./config/db");

db.connect();

// const { engine } = require ('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

// HTML logger
app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);

// app.engine('handlebars', engine());
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "views"));

//route khoi tao
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
