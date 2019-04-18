#!/bin/bash
  
mvn install -Dmaven.test.skip=true
java -jar target/userservice-0.0.1-SNAPSHOT.jar
