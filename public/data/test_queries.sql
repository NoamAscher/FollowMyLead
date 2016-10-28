/* 1. Loading a map's location info: */

/* load (subset of) location information of a map */

SELECT locations.id, map_id, name, latitude, longitude, date_created
  FROM locations JOIN map_locations ON locations.id=location_id
  WHERE map_id = 2;

/* load location information of a map - general. */

SELECT *
  FROM locations JOIN map_locations ON locations.id=location_id
  WHERE map_id = 2;


/* 2. load a user's sidebar info (name not included for now) */

SELECT handle, bio, avatar
  FROM users
  WHERE id = 4;

/* 3. Get the set of maps the focus-user has favourited */

SELECT maps.id, maps.user_id, name, date_created
  FROM maps JOIN favourite_maps ON maps.id=map_id
  WHERE favourite_maps.user_id = 3;

/* 4. Get users the focus-user is following */

SELECT distinct users.id, handle, bio, avatar
  FROM users JOIN follow_pairs ON users.id=following_id
  WHERE following_id IN
  (SELECT following_id
    FROM follow_pairs
    WHERE follower_id = 1);


/* 5. Get all other users the logged in user is NOT following (search) */

SELECT users.id, handle, bio, avatar
  FROM users
  WHERE users.id != 4 AND users.id NOT IN
  (SELECT distinct users.id
    FROM users JOIN follow_pairs ON users.id=following_id
    WHERE following_id IN
    (SELECT following_id
      FROM follow_pairs
      WHERE follower_id = 4));


/* 6. Create a new map: adapt from relevant seed INSERT */

/* 7. Add a new location to a map: */

INSERT INTO locations /* stuff, with id incrementing */

SELECT location_id FROM locations WHERE /* stuff to get that from previous query */

INSERT INTO map_locations /* with relevant stuff, with:
  - id incrementing
  - locations_id taken from locations
  - map_id from the map loaded
  - user_id from the current user


/* 8. update pin / place: */

UPDATE locations
  SET name='New Location Name',
      summary='Ha Ha Ha!',
      latitude='49.000000',
      longitude='128.000000',
      category='nightlife',
      url='www.example.com',
      img='/images/locations/waterfront.jpg',
      user_id=3,
      date_created='2016.10.27'
  WHERE id=2;

/* reverse: */
UPDATE locations
  SET name='Central United Methodist Church, Spokane, Washington',
      summary='I cant believe this place has 3 stars! I gave it one because theres no -1.',
      latitude='47.653379',
      longitude='-117.421129',
      category='sightseeing',
      url='www.centralMethodist.com',
      img='/images/locations/centralUnited.jpg',
      user_id=3,
      date_created='2016.05.02'
  WHERE id=2;


/* 9. save location to your map: */

/* Forrest Gump (users.id=1) wants to save a location. Given the following map_locations info:

INSERT INTO map_locations (id, location_id, map_id, user_id)
  VALUES (7, 5, 4, 2);

*/



/* of course, autoserializing etc. */


/* 10. delete a location from a map:  */
/* Given: values (8, 5, 1, 1) for (id, location_id, map_id, user_id);
/* note that location_id = 5; then: */

DELETE FROM map_locations
  WHERE id = 8;

DELETE * FROM locations
  WHERE id = 5
  AND id NOT IN
  (SELECT location_id FROM map_locations
    WHERE location_id = 5);

  /* given current seed file, this version won't delete the location. to make it work,
  add a new location as in 7. and then delete it as in 10.



template...oid... for this

/* delete from del_table
where RevCode = '3'
  and  Category  in
    (select Category from del_table
     where RevCode in ('2','3')
     group by Category
     having count(distinct RevCode) =2 )

     */


/*



