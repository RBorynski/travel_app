CREATE DATABASE tourist_database;

\c tourist_database;
DROP TABLE places_table;

CREATE TABLE  places_table (
id BIGSERIAL PRIMARY KEY,
name VARCHAR (255),
type VARCHAR (255)
location VARCHAR (255)
comments VARCHAR (255)
