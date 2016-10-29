

/* AJAX needs

- on DOM ready, how to run the following routes:
  - load user info
  - load followers (favourite maps would load on an event)
  - load the map of that user
  - people following the map

- loadFollowing function - dynamically alter the page accordingly (the purple version)

*/


// map loading stuff (ported from html file)

let tokenURL = 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicG90YXRvd2F2ZSIsImEiOiJjaXVzbzlsbHIwMGZhMnVwdmVoMGphOHNvIn0.HyG4kMGYnE6zVYU6IBr66Q';
let attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';
var map = L.map('initialmap').setView([49.2566, -123.11554], 12);
// here is a pretend set of locations.
var locations = [
  {id: 1, coords: [49.31841, -123.07725], title: 'Northvan', handle: '@billmurray', description: 'This is where I like to walk my dog when it\'s raining outside.', url: 'http://www.google.com', image: 'https://vanillicon.com/f485a272b3dbd1512f933f690acd6e13_50.png'},
  {id: 2, coords: [49.28214, -123.11365], title: 'Gastown', handle: '@billmurray', description: 'This is where I like to walk my dog. ', url: 'http://www.google.com', image: 'https://vanillicon.com/f485a272b3dbd1512f933f690acd6e13_50.png'},
  {id: 3, coords: [49.28213, -123.10854], title: 'Lighthouse Labs', handle: '@billmurray', description: 'Learning to code is one thing. Becoming a developer is a whole other ball-game. At Lighthouse Labs our goal is to take you from hobbyist to professional and be the launchpad for your career.', url: 'http://www.google.com', image: '/images/locations/lighthouselabs.jpg'}
];
const locationsArray = [];
for (let i = 0; i < locations.length; i++) {
  let handle = locations[i].handle;
  let avatar = locations[i].avatar;
  let description = locations[i].description;
  let title = locations[i].title;
  let url = locations[i].url;
  let image = locations[i].image;
  let html = renderHTML(handle, image, description, url, title);
  locationsArray.push(L.marker(locations[i].coords).bindPopup(html));
};
L.tileLayer(tokenURL, { attribution: attribution, maxZoom: 18})
.addTo(map);
// the following method takes in an array of points to add to the map view
L.layerGroup(locationsArray).addTo(map);
function renderHTML(handle, avatar, description, url, place) {
  var $section = $("<section>").addClass("popup-container").html('<img src=\'' + avatar + '\' class="popup-image"><br>' + '<span class="popup-placetitle"><h6>' + place + '</h6></span>');
  var $header = $("<header>").addClass("popup-header");
  var $content = $("<content>").addClass("popup-body").html(description + '<p>' + '<a class="popup-link" href=' + url + '>' + url + '</a>');
  var $footer = $("<footer>").addClass("popup-footer").html("<button type='button' class='popup-edit'>Edit</button><button type='button' class='popup-delete'>Delete</button>");
  $section.append($header);
  $section.append($content);
  $section.append($footer);
  return $($section).prop('outerHTML');
};


// subfunctions for the sidebar:



var userInfoInSidebar = function(userInfo) {
  return `
    <article class="user">
      <header class="user-header">
      <img class="avatar" src="${users.avatar}">
      <span class="handle">${users.handle}</span>
    </header>
      <span class="bio">
        ${users.bio}
      </span>
    </article>
  `;
};

var favouriteMapsInSidebar = function(favouriteMapsInfo) {

};

var followedUsersInSidebar = function(followedUsersInfo) {

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

var toggleSurrounder = function(noParamPerhaps) {      // name may change based on Mike's work

};

var renderOtherUsermap = function(mapinfo) {

}

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