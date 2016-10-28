"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
// const methodOverride = require('method-override');


// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../public"));
// app.use(methodOverride('_method'));
console.log('Ran server')
  // app.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname + "/../index.html"));
// });


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
