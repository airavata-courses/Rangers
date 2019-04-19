#!/bin/bash
  
mvn clean package -DskipTests
java -jar target/userservice-0.0.1-SNAPSHOT.jar
