DROP DATABASE IF EXISTS project_3_db;
CREATE DATABASE project_3_db;

USE project_3_db;

INSERT INTO employees (first_name, last_name, street, city, state, zip, email, phone, account_key, isAdmin)
VALUES ("Admin", "Barber", "238 W 8th St", "Charlotte", "NC", "18293", "admin@gmail.com", "5958543940", "admin18", true);
