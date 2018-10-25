-- CREATE DATABASE
-- tourist_database;

-- \c
-- tourist_database;

DROP TABLE plans_table;

CREATE TABLE  plans_table (
id BIGSERIAL PRIMARY KEY,
landmark VARCHAR (255),
city VARCHAR (255),
comment VARCHAR (255),
visited BOOLEAN ,
photo_url VARCHAR (255)
);






 -- psql -f ./database/schema.sql
 -- psql -f ./database/seed.sql
