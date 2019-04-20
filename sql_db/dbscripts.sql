drop database if exists rangers;
drop user if exists DB_USER;
create database rangers;

use rangers;

CREATE TABLE rooms ( id INT unsigned NOT NULL AUTO_INCREMENT, location VARCHAR(150) NOT NULL, owneremail VARCHAR(150) NOT NULL, guests INT NOT NULL, available TINYINT NOT NULL, price INT NOT NULL, description VARCHAR(150) NULL, wifi TINYINT NOT NULL, microwave TINYINT NOT NULL, safeCloset TINYINT NOT NULL, PRIMARY KEY (id));

INSERT INTO rooms (location, owneremail, guests, available, price, description, wifi, microwave, safeCloset) VALUES ("Bloomington", "aangal@iu.edu", 3, TRUE, 200, "Nice view from balcony", TRUE, TRUE, TRUE);

CREATE TABLE users
(id INTEGER NOT NULL AUTO_INCREMENT, 
firstname VARCHAR(20) NOT NULL, 
lastname VARCHAR(20) NOT NULL, 
password VARCHAR(20) NOT NULL, 
email VARCHAR(30) NOT NULL, 
phone VARCHAR(10) NOT NULL, 
PRIMARY KEY (ID) ); 

CREATE TABLE userotp 
(email VARCHAR(30) NOT NULL, 
otp INTEGER, 
PRIMARY KEY(email));

drop database if exists rentnlease;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

FLUSH PRIVILEGES;


