FROM openjdk:8-jdk-alpine

COPY . /app

WORKDIR /app

RUN apk add maven --update-cache --repository http://dl-4.alpinelinux.org/alpine/edge/community/ --allow-untrusted \
        && rm -rf /var/cache/apk/*

ENV MAVEN_HOME /usr/share/java/maven-3
ENV PATH $PATH:$MAVEN_HOME/bin

RUN chmod 777 run-microservice.sh

ENTRYPOINT ["sh","run-microservice.sh"]
