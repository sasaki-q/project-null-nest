CREATE TABLE users (
  id        	SERIAL PRIMARY KEY,
  thirdparty_uid      	VARCHAR(100) NOT NULL,
  email       	INT NOT NULL,
  created_at 	TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE messaging (
  id        	SERIAL PRIMARY KEY,
  uid      	  INT NOT NULL REFERENCES users(id),
  contents       VARCHAR(100) NOT NULL,
  created_at 	TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);