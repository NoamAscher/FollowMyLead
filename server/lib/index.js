"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride('_method'));


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
