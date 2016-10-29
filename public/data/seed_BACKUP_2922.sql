INSERT INTO users (id, handle, email, password, bio, avatar)
  VALUES (1, 'ForrestGump', 'forrest@gump.com', 'lhl',
    'I have been everywhere', '/images/avatars/bench.jpg');

INSERT INTO users (id, handle, email, password, bio, avatar)
  VALUES (2, 'BillMurray', 'bill@fillmurray.com', 'lhl',
    'I am Bill Murray.', '/images/avatars/bill_murray.jpg');

INSERT INTO users (id, handle, email, password, bio, avatar)
  VALUES (3, 'Paris', 'hilton@email.com', 'lhl',
    ':-)', '/images/avatars/img_2_b_added.jpg');

INSERT INTO users (id, handle, email, password, bio, avatar)
  VALUES (4, 'random_celeb', 'random_celeb@celeb.org', 'lhl',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    '/images/avatars/img_3_b_added.jpg');

INSERT INTO users (id, handle, email, password, bio, avatar)
  VALUES (5, 'Cicero', 'cicero@ancient.rome', 'lhl',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    '/images/avatars/218px-Cicero.jpg');

INSERT INTO users (id, handle, email, password, bio, avatar)
  VALUES (6, 'Louis C.K.', 'louis@notoninternet.com', 'lhl',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    '/images/avatars/218px-Cicero.jpg');

INSERT INTO users (id, handle, email, password, bio, avatar)
  VALUES (7, 'SpongeBob', 'spongebob@squarepants.net', 'lhl',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    '/images/avatars/218px-Cicero.jpg');


INSERT INTO maps (id, user_id, name, date_created)
  VALUES(1, 1, 'Boxa Chocolata', '2016.10.03');

INSERT INTO maps (id, user_id, name, date_created)
  VALUES(2, 2, 'Bill Murray''s Trials', '2016.10.03');

INSERT INTO maps (id, user_id, name, date_created)
  VALUES(3, 2, 'Bill Murray''s Tribulations', '2016.10.03');

INSERT INTO maps (id, user_id, name, date_created)
  VALUES(4, 3, 'The Struggle Is Real', '2016.10.03');
<<<<<<< HEAD

INSERT INTO maps (id, user_id, name, date_created)
  VALUES(5, 4, 'Oh the Places I''ve Been', '2016.10.03');

INSERT INTO maps (id, user_id, name, date_created)
  VALUES(6, 5, 'I lost a bet :(', '2016.10.04');

INSERT INTO maps (id, user_id, name, date_created)
  VALUES(7, 1, 'Forrest''s Other Map', '2016.10.06');


/*
=======

INSERT INTO maps (id, user_id, name, date_created)
  VALUES(5, 4, 'Oh the Places I''ve Been', '2016.10.03');

INSERT INTO maps (id, user_id, name, date_created)
  VALUES(6, 5, 'I lost a bet :(', '2016.10.04');

INSERT INTO maps (id, user_id, name, date_created)
  VALUES(7, 1, 'Forrest''s Other Map', '2016.10.06');



>>>>>>> 32a6d8adfaff41bdc3f8e79d1cba0184a5f1e37d
INSERT INTO locations (id, name, summary, latitude, longitude, category, url, img, user_id, map_id, date_created)
  VALUES (1, 'Waterfront Station',
    'Horrible food! Mediocre service and horrible food!',
    '49.2849163', '-123.1157802', 'transportation', 'www.waterfront.van', '/images/locations/waterfront.jpg',
    2, 1, '2016.08.30');

INSERT INTO locations (id, name, summary, latitude, longitude, category, url, img, user_id, map_id, date_created)
  VALUES (2, 'Central United Methodist Church, Spokane, Washington',
    'I cant believe this place has 3 stars! I gave it one because theres no -1.',
    '47.653379', '-117.421129', 'sightseeing', 'www.centralMethodist.com', '/images/locations/centralUnited.jpg',
    3, 1, '2016.05.02');

INSERT INTO locations (id, name, summary, latitude, longitude, category, url, img, user_id, map_id, date_created)
  VALUES (3, 'Third Beach',
    'Horrible food! Mediocre service and horrible food!',
    '49.303181', '-123.158833', 'transportation', 'www.waterfront.van', '/images/locations/third_beach.jpg',
    2, 1, '2016.08.30');

INSERT INTO locations (id, name, summary, latitude, longitude, category, url, img, user_id, map_id, date_created)
  VALUES (4, 'Waterfront Station',
    'I cant believe this place has 3 stars! I gave it one because theres no -1.',
    '49.2849163', '-123.1157802', 'transportation', 'www.waterfront.van', '/images/locations/waterfront.jpg',
    2, 3, '2016.08.30');

INSERT INTO locations (id, name, summary, latitude, longitude, category, url, img, user_id, map_id, date_created)
  VALUES (5, 'Waterfront Station',
    'Horrible food! Mediocre service and horrible food!',
    '49.2849163', '-123.1157802', 'transportation', 'www.waterfront.van', '/images/locations/waterfront.jpg',
    2, 4, '2016.08.30');

INSERT INTO locations (id, name, summary, latitude, longitude, category, url, img, user_id, map_id, date_created)
  VALUES (6, 'Waterfront Station',
    'I cant believe this place has 3 stars! I gave it one because theres no -1.',
    '49.2849163', '-123.1157802', 'transportation', 'www.waterfront.van', '/images/locations/waterfront.jpg',
    2, 7, '2016.08.30');

INSERT INTO locations (id, name, summary, latitude, longitude, category, url, img, user_id, map_id, date_created)
  VALUES (7, 'Waterfront Station',
    'Horrible food! Mediocre service and horrible food!',
    '49.2849163', '-123.1157802', 'transportation', 'www.waterfront.van', '/images/locations/waterfront.jpg',
    2, 6, '2016.08.30');
<<<<<<< HEAD
*/
=======

>>>>>>> 32a6d8adfaff41bdc3f8e79d1cba0184a5f1e37d


/*
INSERT INTO map_locations (id, location_id, map_id, user_id)
  VALUES (1, 1, 1, 1);
INSERT INTO map_locations (id, location_id, map_id, user_id)
  VALUES (2, 2, 1, 1);
INSERT INTO map_locations (id, location_id, map_id, user_id)
  VALUES (3, 3, 1, 1);
INSERT INTO map_locations (id, location_id, map_id, user_id)
  VALUES (4, 2, 2, 2);
INSERT INTO map_locations (id, location_id, map_id, user_id)
  VALUES (5, 3, 2, 2);
INSERT INTO map_locations (id, location_id, map_id, user_id)
  VALUES (6, 4, 3, 2);
INSERT INTO map_locations (id, location_id, map_id, user_id)
  VALUES (7, 5, 4, 2);
*/


INSERT INTO favourite_maps (id, user_id, map_id)
  VALUES (1, 1, 3);
INSERT INTO favourite_maps (id, user_id, map_id)
  VALUES (2, 1, 4);
INSERT INTO favourite_maps (id, user_id, map_id)
  VALUES (3, 1, 5);
INSERT INTO favourite_maps (id, user_id, map_id)
  VALUES (4, 1, 6);
INSERT INTO favourite_maps (id, user_id, map_id)
  VALUES (5, 2, 4);
INSERT INTO favourite_maps (id, user_id, map_id)
  VALUES (6, 2, 5);
INSERT INTO favourite_maps (id, user_id, map_id)
  VALUES (7, 3, 6);

INSERT INTO favourite_maps (id, user_id, map_id)
  VALUES (8, 4, 1);
INSERT INTO favourite_maps (id, user_id, map_id)
  VALUES (9, 4, 7);
INSERT INTO favourite_maps (id, user_id, map_id)
  VALUES (10, 6, 7);


INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (1, 1, 2);
INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (2, 1, 3);
INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (3, 1, 6);
INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (4, 1, 7);

INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (5, 2, 1);
INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (6, 2, 5);
INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (7, 2, 6);

INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (8, 3, 2);
INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (9, 3, 4);
INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (10, 3, 7);

INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (11, 4, 1);
INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (12, 4, 3);

INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (13, 5, 2);
INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (14, 5, 3);
INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (15, 5, 6);
INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (16, 5, 7);

INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (17, 6, 2);
INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (18, 6, 7);

INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (19, 7, 1);
INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (20, 7, 3);
INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (21, 7, 5);
INSERT INTO follow_pairs (id, follower_id, following_id)
  VALUES (22, 7, 6);

