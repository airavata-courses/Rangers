drop database if exists rentnlease;
drop user if exists DB_USER;
create database rentnlease;

use rentnlease;
CREATE TABLE user 
(id INTEGER NOT NULL AUTO_INCREMENT, 
firstname VARCHAR(20) NOT NULL, 
lastname VARCHAR(20) NOT NULL, 
password VARCHAR(20) NOT NULL, 
email VARCHAR(30) NOT NULL, 
phone VARCHAR(10) NOT NULL, 
PRIMARY KEY (ID) );


CREATE TABLE userOTP 
(email VARCHAR(20) NOT NULL, 
otp INTEGER, 
PRIMARY KEY(email));
