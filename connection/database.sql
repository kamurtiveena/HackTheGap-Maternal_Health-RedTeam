CREATE DATABASE publishers;

CREATE TABLE contacted_use(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(50)
)


CREATE TABLE contacted_user (
	user_id SERIAL PRIMARY KEY,
	username VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) NOT NULL,
	subject VARCHAR ( 100 ) NOT NULL,
	message VARCHAR ( 4000 ) NOT NULL
);

CREATE TABLE fruits(
   userid SERIAL PRIMARY KEY,
   	name VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) NOT NULL,
	subject VARCHAR ( 100 ) NOT NULL,
	message VARCHAR ( 4000 ) NOT NULL

);


CREATE TABLE journal_details(
    journal_d_id SERIAL PRIMARY KEY,
	
    journal_title VARCHAR(50) NOT NULL,
	
    journal_description VARCHAR(50) NOT NULL,
	
    journal_image VARCHAR(10000)
)
