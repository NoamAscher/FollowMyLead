

/* AJAX needs

- on DOM ready, how to run the following routes:
  - load user info
  - load followers (favourite maps would load on an event)
  - load the map of that user
  - people following the map

- loadFollowing function - dynamically alter the page accordingly (the purple version)

*/


// subfunctions for the sidebar:

var userInfoInSidebar = function(userInfo) {

};

var favouriteMapsInSidebar = function(favMapsInfo) {

};

var followedUsersInSidebar = function(follwdUsersInfo) {

};


/* sample to mock:
var renderTweets = function(tweets) {
  var dom = tweets.reverse().map(createTweetElement);
  $('#tweet-container').empty().append(dom);
};
*/

var renderSidebar = function(info) {    // info will contain whatever info the sidebar needs.
  // do something to this if needed:
  var sideDom = info;
  $('.content-primary container-fluid').empty().append(sideDom);
};



// subfunctions for the map:

var toggleSurrounder = function(mapinfo) {      // name may change based on Mike's work

};

var renderMapWatchers = function(mapWatchersInfo) {

};


/* Render the Map!! */

var renderMap = function(mapinfo) {
  // do something, including the purple stuff.
}


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

/* STUFF STUFF STUFF STUFF STUFF STUFF STUFF STUFF STUFF
STUFF STUFF STUFF STUFF STUFF STUFF STUFF
STUFF STUFF STUFF STUFF STUFF STUFF STUFF STUFF
STUFF STUFF STUFF
STUFF STUFF
STUFF STUFF STUFF STUFF STUFF STUFF STUFF
STUFF STUFF STUFF STUFF STUFF STUFF
*/


}



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