CREATE USER 'dev'@'%' IDENTIFIED BY '1234';
FLUSH PRIVILEGES;
GRANT ALL PRIVILEGES ON employees.* TO dev@'%';