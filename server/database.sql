CREATE TABLE users(
id SERIAL PRIMARY KEY,
name VARCHAR(28), 
email VARCHAR, 
description TEXT
);

-- INSERT INTO users(username, passhash)VALUES($1, $2);

-- INSERT INTO users(name, email, description)VALUES('Patrice', 'Tan', 'I love pineapple');