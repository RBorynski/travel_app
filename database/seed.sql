\c tourist_database
INSERT INTO plans_table
  (landmark, city, comment, Visited)
VALUES
( 'Central Park', 'NYC', 'Bring food', false);

 -- psql -f ./database/seed.sql
INSERT INTO plans_table
  (landmark, city, comment, Visited)
VALUES
('Louvre', 'Paris', 'no camera', false );
