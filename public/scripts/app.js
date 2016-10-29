

/* AJAX needs

- on DOM ready, how to run the following routes:
  - load user info
  - load followers (favourite maps would load on an event)
  - load the map of that user
  - people following the map

- loadFollowing function - dynamically alter the page accordingly (the purple version)

*/


$(function() {

  $(document).ajaxError(function(e, req, xhr) {
    var error;
    try
    {
      error = JSON.parse(req.responseText);
    }
    catch(e)
    {
      error = e
    }
  });

  $()



//   $.ajaxSetup({
//     url: "/api/"
//   })

//   $.ajax({
//     url: 'api/',
//     method: 'GET',
//     dataType: 'json',
//     success: function (result) {
//       $('#tweetContainer').append(renderTweets(result));
//     },
//     error: function() {

//     }
//   })


// });