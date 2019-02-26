FROM mysql
#COPY . /app
#WORKDIR /app
#CMD sh run_sql.sh
COPY dbscripts.sql /docker-entrypoint-initdb.d/
