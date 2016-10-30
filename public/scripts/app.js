

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

var favouriteMapInSidebar = function(favouriteMapInfo) {
  //console.log(favouriteMapInfo);
  return `
    <article class="map">
      <div class="left">
        <img class="avatar" src="${favouriteMapInfo.avatar}">
      </div>
      <div class="right">
        <div class="handle">${favouriteMapInfo.handle}:</div>
        <div class="map-name">"${favouriteMapInfo.name}"</div>
        <div class="map-id" style="display: none">"${favouriteMapInfo.map_id}"</div>
      </div>
    </article>
  `;
};

var followedUsersInSidebar = function(followedUsersInfo) {
  return `
    <article class="followed">
      <div class="left">
        <img class="avatar" src="${followedUsersInfo.avatar}">
      </div>
      <div class="right">
        <div class="handle">${followedUsersInfo.handle}</div>
        <div class="bio">"${followedUsersInfo.bio}"</div>
      </div>
    </article>
  `;
};


var loadSidebar = function() {
  $.get('api/users/2', function(data) {
    var theObject = data[0];
    $('.upper-sidebar').empty().append(userInfoInSidebar(theObject));
  });
  $.get('/api/users/2/favourites', function(data) {
    //console.log(data);
    //$('.lower-sidebar-body').empty();
    data.forEach(function(entry) {
      //console.log(entry);
      $('.favorites-body').append(favouriteMapInSidebar(entry));
    });
  });

  $.get('/api/users/2/following', function(data) {
    data.forEach(function(entry) {
      $('.followed-body').hide().append(followedUsersInSidebar(entry));
    });
  });

  // Click on an avatar to load a new map:

  //   $.get('/api/map/:id/locations', function(data) {
  //   var theObject = data[0];
  //   $('.upper-sidebar').empty().append(userInfoInSidebar(theObject));
  // });
};


// subfunctions for the map:

var toggleSurrounder = function(noParamPerhaps) {      // name may change based on Mike's work

};

var renderOtherUsermap = function(mapinfo) {

}

var renderMapWatchers = function(mapWatchersInfo) {

};


/* Render the Map!! */

// var renderMap = function(mapinfo) {

//   $.get('/api/map/:id/locations', function(data) {
//     var theObject = data[0];
//     $('.upper-sidebar').empty().append(userInfoInSidebar(theObject));
//   });
//   // do something, including the purple stuff.
// }

var renderHTML = function (id, avatar, description, url, place) {

      var $section = $("<section>").addClass("popup-container").html('<img src=\'' + avatar + '\' class="popup-image"><br>' + '<span class="popup-placetitle"><h6>' + place + '</h6></span>');
      var $header = $("<header>").addClass("popup-header");
      var $content = $("<content>").addClass("popup-body").html(description + '<p>' + '<a class="popup-link" href=' + url + '>' + url + '</a>');
      var $footer = $("<footer>").addClass("popup-footer").html("<form method='post' action='/locations/'' + id + '?_method=DELETE' ><button class='popup-edit' type='submit' value='Submit'>Delete</button></form>");

      $section.append($header);
      $section.append($content);
      $section.append($footer);

      return $($section).prop('outerHTML');

    };

    var renderForm = function(user, lat, long) {

      var $form = $("<form>").attr("method", "POST").attr("action", "/maps/" + user + "/locations/").addClass("popup-form");

      var $nameLabel = $("<label>").attr("for", "name").text("Name");
      var $summaryLabel = $("<label>").attr("for", "summary").text("Summary");
      var $urlLabel = $("<label>").attr("for", "url").text("URL");
      var $imageLabel = $("<label>").attr("for", "image").text("Image");

      var $name = $("<input>").attr("id", "name_field").attr("name", "name");
      var $summary = $("<input>").attr("id", "summary_field").attr("name", "summary");
      var $url = $("<input>").attr("id", "url_field").attr("name", "url");
      var $image = $("<input>").attr("id", "image_field").attr("name", "image");
      var $long = $("<input>").attr("id", "long_field").attr("name", "long").attr("type", "hidden").attr("value", long);
      var $lat = $("<input>").attr("id", "lat_field").attr("name", "lat").attr("type", "hidden").attr("value", lat);
      var $button = $("<button>");

      var $category = $("<select>");

      var $points = $("<option>").attr("value", "Points of Interest").html("Points of Interest");
      var $beaches = $("<option>").attr("value", "Beaches").html("Beaches");
      var $restaurants = $("<option>").attr("value", "Restaurants").html("Restaurants");
      var $parks = $("<option>").attr("value", "Parks and Nature").html("Parks and Nature");
      var $cafes = $("<option>").attr("value", "Cafes").html("Cafes");

      $category.append($points);
      $category.append($beaches);
      $category.append($restaurants);
      $category.append($parks);
      $category.append($cafes);

      $form.append($nameLabel);
      $form.append($name);
      $form.append($summaryLabel);
      $form.append($summary);
      $form.append($urlLabel);
      $form.append($url);
      $form.append($imageLabel);
      $form.append($image);
      $form.append($long);
      $form.append($lat);
      $form.append($category);
      $form.append($button);

      return $($form).prop('outerHTML');
    };


$(document).ready(function() {

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

  //$('.content-primary').append('<span>HI APPEND ME PLEASE</span');
  loadSidebar();
  //$.get('/api/users/:id').then(userInfoInSidebar());


  // // Compose button functionality
  // $('#nav-bar').find('.compose').on('click', function(event) {
  //   if ($('.new-tweet').is(':hidden') ) {
  //     $('.new-tweet').slideDown();
  //     $('.new-tweet').find('textarea').focus();
  //   } else {
  //     $('.new-tweet').slideUp();
  //   }
  // });

  // Toggle panes
  $('.lower-sidebar').find('.favorites-header').on('click', function(event) {
    if ($('.favorites-body').is(':hidden')) {
      $('.followed-body').hide();
      $('.favorites-body').show();
    }
  });

  $('.lower-sidebar').find('.followed-header').on('click', function(event) {
    if ($('.followed-body').is(':hidden')) {
      $('.favorites-body').hide();
      $('.followed-body').show();
    }
  });

  $('.favorites-body').on('click', 'img', function(event) {
    let tokenURL = 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicG90YXRvd2F2ZSIsImEiOiJjaXVzbzlsbHIwMGZhMnVwdmVoMGphOHNvIn0.HyG4kMGYnE6zVYU6IBr66Q';
    let attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';
    var map = markers.clearLayers();

    var mapId = $(this).parent().next().find('.map-id').html();
    mapId = mapId.substring(1,2);
    routeString = `/api/map/${mapId}/locations`;
    console.log(routeString);
    //map.removeLayer(locationsOnMap);
    $.get( routeString, function(data) {
      //console.log(data);


      var locationsArray = [];
      let newLocation;

      function onMapClick(e) {
        if (newLocation !== undefined) {
          map.removeLayer(newLocation);
        }

        let coords = [e.latlng.lat, e.latlng.lng];
        newLocation = L.marker(coords).bindPopup(renderForm("1", e.latlng.lat, e.latlng.lng)).addTo(map).openPopup();

        // $('form').on('submit', function (event) {
        //   event.preventDefault();
        // })
      }

      map.on('click', onMapClick);

      console.log(data);

      for (let i = 0; i < data.length; i++) {
        //let handle = data[i].handle;
        let avatar = data[i].avatar;
        let summary = data[i].summary;
        let name = data[i].name;
        let url = data[i].url;
        let image = data[i].img;
        let category = data[i].category;
        let html = renderHTML("1", image, summary, url, name);
        let locationId = data[i].id;
        let coords = [data[i].latitude, data[i].longitude];
        locationsArray.push(L.marker(coords).bindPopup(html));
        L.layerGroup(locationsArray).addTo(map);

      };
    });

    L.tileLayer(tokenURL, { attribution: attribution, maxZoom: 18})
    .addTo(map);
    // the following method takes in an array of points to add to the map view

  });

}); // temp close bracket
 // and another






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