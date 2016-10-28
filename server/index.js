"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override');

// Start your server with this command to make it go to production mode.
//    NODE_ENV=production node index.js
const NODE_ENV = process.env.NODE_ENV || "development";
const knexConnectionInfo = require('../knexfile')[NODE_ENV];
console.log("Connecting to database...")
const knex = require('knex')(knexConnectionInfo);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../public"));
app.use(methodOverride('_method'));
// console.log('Ran server')
  // app.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname + "/../index.html"));
// });


app.get('/locations', function(req, res) {
  knex.select().from('locations')
  .then(function(locations) {
    console.log("got locations", locations)
    res.send("Got data")
  })
  .catch(function(error){
    console.error(error);
    res.json({error: {message: error}})
  })

});



app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
