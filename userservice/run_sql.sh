#!\bin\sh
cp my.cnf ~/.my.cnf
chmod 600 ~/.my.cnf
mysql -u root -D rentnlease < ./dbscripts.sql

