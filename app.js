const express = require("express");
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

const router = require("./config/routes.config");
app.use(router);

require("./config/db.config");

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

app.listen(3000, () => {
    console.log("VAAMOS!");
});
