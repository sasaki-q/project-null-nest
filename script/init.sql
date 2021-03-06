CREATE TABLE users (
  id        	        SERIAL PRIMARY KEY,
  thirdparty_uid      VARCHAR(100) NOT NULL,
  email       	      VARCHAR(100) NOT NULL,
  profile_image_url   VARCHAR(100) DEFAULT NULL,
  self_introduction   VARCHAR(100) DEFAULT NULL,
  created_at 	        TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE messaging (
  id        	SERIAL PRIMARY KEY,
  from_uid    INT NOT NULL REFERENCES users(id),
  to_uid      INT NOT NULL,
  type        VARCHAR(5) NOT NULL,
  contents    VARCHAR(200) NOT NULL,
  created_at 	TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);