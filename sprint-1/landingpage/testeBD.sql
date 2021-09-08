CREATE TABLE users (  
id int unsigned NOT NULL AUTO_INCREMENT,     
nome varchar(75) NOT NULL,     
nome_bixo varchar(75) NOT NULL,     
senha varchar(255) NOT NULL,     
email varchar(100) NOT NULL,     
PRIMARY KEY (id),     
UNIQUE KEY email (email) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=1;

SHOW indexes from users;

drop table users;

show columns from users;