#!/bin/bash
  
mvn clean package
java -jar target/userservice-0.0.1-SNAPSHOT.jar
