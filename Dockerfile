FROM node:8-alpine

COPY . /app

WORKDIR /app


RUN npm install

EXPOSE 3010

RUN chmod 777 run-microservice.sh

ENTRYPOINT ["sh","run-microservice.sh"]

