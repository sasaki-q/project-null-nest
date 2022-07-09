CREATE TABLE users (
  id        	SERIAL PRIMARY KEY,
  age       	INT NOT NULL,
  name      	VARCHAR(20) NOT NULL,
  role      	VARCHAR(20) NOT NULL,
  email     	VARCHAR(100) NOT NULL,
  password    VARCHAR(64) NOT NULL,
  created_at 	TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE todos (
  id        	SERIAL PRIMARY KEY,
  uid      	  INT NOT NULL REFERENCES users(id),
  title       VARCHAR(100) NOT NULL, 	
  is_done    	BOOLEAN DEFAULT FALSE NOT NULL,
  created_at 	TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO users (age, name, role, email, password) VALUES 
    (10, 'sakamoto', 'USER',   'vofxx@icloud.com',     'password'),
    (20, 'sakata',   'MASTER', 'sakata@exmaple.com',   'password'),
    (30, 'sakuma',   'USER',   'sakuma@exmaple.com',   'password'),
    (40, 'sasaki',   'USER',   'sakamoto@exmaple.com', 'password'),
    (50, 'sato',     'ADMIN',  'sato@exmaple.com',     'password');

INSERT INTO todos (uid, title) VALUES 
    (1, 'coding'),
    (2, 'unit test'),
    (2, 'integration test'),
    (1, 'fix'),
    (1, 'add'),
    (3, 'meeting'),
    (5, 'visit');