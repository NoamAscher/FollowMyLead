

/* AJAX needs

- on DOM ready, how to run the following routes:
  - load user info
  - load followers (favourite maps would load on an event)
  - load the map of that user
  - people following the map

- loadFollowing function - dynamically alter the page accordingly (the purple version)

*/


// map loading stuff (ported from html file)

// let tokenURL = 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicG90YXRvd2F2ZSIsImEiOiJjaXVzbzlsbHIwMGZhMnVwdmVoMGphOHNvIn0.HyG4kMGYnE6zVYU6IBr66Q';
// let attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';
// var map = L.map('initialmap').setView([49.2566, -123.11554], 5);
// // here is a pretend set of locations.
// $.get( "api/locations/2", function(data) {
//   const locationsArray = [];
//   let newLocation;
//   function onMapClick(e) {
//     if (newLocation !== undefined) {
//       map.removeLayer(newLocation);
//     }
//     let coords = [e.latlng.lat, e.latlng.lng];
//     newLocation = L.marker(coords).bindPopup("i am a form" + coords).addTo(map).openPopup();
//   }
//   map.on('click', onMapClick);
//   for (let i = 0; i < data.length; i++) {
//     //let handle = data[i].handle;
//     let avatar = data[i].avatar;
//     let summary = data[i].summary;
//     let name = data[i].name;
//     let url = data[i].url;
//     let image = data[i].img;
//     let category = data[i].category;
//     let html = renderHTML("handle", image, summary, url, name);
//     let coords = [data[i].latitude, data[i].longitude];
//     locationsArray.push(L.marker(coords).bindPopup(html));
//     L.layerGroup(locationsArray).addTo(map);
//   };
// });
// L.tileLayer(tokenURL, { attribution: attribution, maxZoom: 18})
// .addTo(map);
// // the following method takes in an array of points to add to the map view
// function renderHTML(handle, avatar, description, url, place) {
//   var $section = $("<section>").addClass("popup-container").html('<img src=\'' + avatar + '\' class="popup-image"><br>' + '<span class="popup-placetitle"><h6>' + place + '</h6></span>');
//   var $header = $("<header>").addClass("popup-header");
//   var $content = $("<content>").addClass("popup-body").html(description + '<p>' + '<a class="popup-link" href=' + url + '>' + url + '</a>');
//   var $footer = $("<footer>").addClass("popup-footer").html("<button type='button' class='popup-edit'>Edit</button><button type='button' class='popup-delete'>Delete</button>");
//   $section.append($header);
//   $section.append($content);
//   $section.append($footer);
//   return $($section).prop('outerHTML');
// };


// subfunctions for the sidebar:



var userInfoInSidebar = function(users) {
  console.log(users);
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

  $.get('api/users/1', function(data) {
    var info = ([data[0].id, data[0].handle, data[0].bio, data[0].avatar]);
    return info;
  }).then(userInfoInSidebar)
  //$.get('/api/users/:id').then(userInfoInSidebar());


/* STUFF STUFF STUFF STUFF STUFF STUFF STUFF STUFF STUFF
STUFF STUFF STUFF STUFF STUFF STUFF STUFF
STUFF STUFF STUFF STUFF STUFF STUFF STUFF STUFF
STUFF STUFF STUFF
STUFF STUFF
STUFF STUFF STUFF STUFF STUFF STUFF STUFF
STUFF STUFF STUFF STUFF STUFF STUFF
*/


});



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