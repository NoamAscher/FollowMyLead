// $(function() {

  const knex = require('knex')({
    client: 'pg',
    connection: {
      user     : 'nic',
      // password : settings.password,
      database : 'vagrant',
      host     : 'localhost:3000',
      // ssl      : settings.ssl,
      // port     : settings.port
  }
});

  knex.select().from('locations').timeout(1000)

  // $.ajaxSetup({
  //   url: "/api/"
  // })

  // $.ajax({
  //   url: 'api/',
  //   method: 'GET',
  //   dataType: 'json',
  //   success: function (result) {
  //     $('#tweetContainer').append(renderTweets(result));
  //   },
  //   error: function() {

  //   }
  // })


// });