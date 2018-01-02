DROP TABLE IF EXISTS adminsinfo;
DROP TABLE IF EXISTS projects;


CREATE TABLE adminsinfo (
    id SERIAL PRIMARY KEY,
    about TEXT,
    image TEXT,
    profileImg TEXT,
    email TEXT,
    hashed_password TEXT,
    cv json NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO adminsinfo (about, cv) VALUES ('no about data yet', '{"work":"no work"}');

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    description TEXT,
    image TEXT,
    links TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
