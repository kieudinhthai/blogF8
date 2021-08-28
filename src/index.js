const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const app = express();
const port = 3001;
//put post get delete
const methordOverride = require("method-override");

const route = require("./routers");
const data = require("./config/db");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(methordOverride("_method"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

data.connect();
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
