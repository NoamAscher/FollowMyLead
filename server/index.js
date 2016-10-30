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
app.set('view engine', 'ejs');
app.set('views', __dirname + '/../views');
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/users/:id', function(req, res) {
  req.session.userId = req.params.id;
  knex.select().from('users').innerJoin('maps', 'users.id', 'user_id').where('users.id', req.params.id)
  .then(function(users) {
    res.render('user.html')
  })
  .catch(function(error) {
    console.error(error);
    res.json({error: {message: error}})
  })
});

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

app.get('/logout', function (req, res) {
  req.session.userId = null;
  console.log('logged out user');
  res.redirect('/');
})

app.get('/login', function(req, res) {
  req.session.userId = 100;
  console.log('logged in');
  res.redirect('/');
})

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

// instead of longitude/latitude, store the co-ordinates in an array
// Example: [49.28214, -123.07725]  - this is how the API likes the
// data anyway.  OR we can just mutate when we write/read the coords
// Example:  array[0] = long   //   array[1] = lat

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

SELECT distinct avatar, handle, name
  FROM users JOIN maps ON users.id=user_id JOIN favourite_maps ON maps.id=map_id
  WHERE map_id IN
  (SELECT map_id
    FROM favourite_maps WHERE user_id = 1);

// New route: get user-favorited maps
app.get('/api/users/:id/favourites', function(req, res) {
  knex.distinct('avatar', 'handle', 'name').select().from('users')
  .innerJoin('maps', 'users.id', 'user_id')
  .innerJoin('favourite_maps', 'maps.id', 'map_id')
  .wherein(map_id, knex.select('map_id').from('favourite_maps')
    .where('user_id', req.params.id))
  .then(function(info) {
    res.json(info);
  })
  .catch(function(error) {
    console.error(error);
    res.json({error: {message: error}})
  })
});



app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});