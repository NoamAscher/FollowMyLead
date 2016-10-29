"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override');
const cookieSession = require('cookie-session');

// Start your server with this command to make it go to production mode.
//    NODE_ENV=production node index.js
const NODE_ENV = process.env.NODE_ENV || "development";
const knexConnectionInfo = require('../knexfile')[NODE_ENV];
console.log("Connecting to database...")
const knex = require('knex')(knexConnectionInfo);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../public"));
app.use(methodOverride('_method'));
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

// Example user loaded // no login
app.get('/api/users/:id', function(req, res) {
  knex.select().from('users').innerJoin('maps', 'users.id', 'user_id').where('users.id', req.params.id)
  .then(function (users) {
    res.json(users);
  })
  .catch(function(error) {
    console.error(error);
    res.json({error: {message: error}})
  })
});

app.get('/api/locations/:id', function(req, res) {
  knex.select().from('locations').where('user_id', req.params.id)
  .then(function (locations) {
    res.json(locations);
  })
  .catch(function(error) {
    console.error(error);
    res.json({error: {message: error}})
  })
});

app.get('/users/:id', function(req, res) {
  req.session.userId = req.params.id;
  knex.select().from('users').innerJoin('maps', 'users.id', 'user_id').where('users.id', req.params.id)
  .then(function(users) {
    res.render('users.html')
  })
  .catch(function(error) {
    console.error(error);
    res.json({error: {message: error}})
  })
});

app.get('/api/maps/:id', function(req, res) {
  knex.select().from('maps').where('id', req.params.id)
  .then(function(maps) {
    res.json(maps[0]);
  })
  .catch(function(error) {
    console.error(error);
    res.json({error: {message: error}})
  })
});

app.post('/maps/new', function(req, res) {
  knex('maps').insert({'user_id': req.session.userId, 'name': req.body.name, 'date_created': Date.now()})
  .then(function(result) {
    res.json({success: true});
  })
  .catch(function(error) {
    console.error(error);
    res.json({error: {message: error}})
  })

});

// NOT DONE - NEED MAP API REFERENCE
app.post('/maps/:id/locations', function(req, res) {
  knex('locations').insert({'name': req.body.name, 'summary': req.body.summary, 'latitude': ASKMIKE, 'longitude': ASKMIKE, 'category': req.body.category, 'url': req.body.url, 'img': req.body.img, 'user_id': req.session.userId, 'map_id': req.params.id, 'date_created': Date.now()})
  .then(function(result) {
    res.json({success: true});
  })
  .catch(function(error) {
    console.error(error);
    res.json({error: {message: error}})
  })

});

// NOT DONE - NEED MAP API REFERENCE
app.post('/maps/:id/locations/copy', function(req, res) {
  knex('locations').insert({'name': req.body.name, 'summary': req.body.summary, 'latitude': ASKMIKE, 'longitude': ASKMIKE, 'category': req.body.category, 'url': req.body.url, 'img': req.body.img, 'user_id': req.session.userId, 'map_id': req.params.id, 'date_created': Date.now()})
  .then(function(result) {
    res.json({success: true});
  })
  .catch(function(error) {
    console.error(error);
    res.json({error: {message: error}})
  })
});

app.put('/locations/:id', function(req, res) {
  knex('locations').insert({'name': req.body.name, 'summary': req.body.summary, 'latitude': ASKMIKE, 'longitude': ASKMIKE, 'category': req.body.category, 'url': req.body.url, 'img': req.body.img, 'user_id': req.session.userId, 'map_id': req.params.id, 'date_created': Date.now()})
  .then(function(result) {
    res.json({success: true});
  })
  .catch(function(error) {
    console.error(error);
    res.json({error: {message: error}})
  })
});

app.delete('locations/:id', function(req, res) {
  knex('locations').where('id', req.params.id).del()
  .then(function(result) {
    res.json({success: true});
  })
  .catch(function(error) {
    console.error(error);
    res.json({error: {message: error}})
  })
});

app.get('/api/users', function(req, res) {
  knex.select().from('users')
  .then(function(users) {
    res.json(users);
  })
  .catch(function(error) {
    console.error(error);
    res.json({error: {message: error}})
  })
});





app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
