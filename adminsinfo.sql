DROP TABLE IF EXISTS adminsinfo;

CREATE TABLE adminsinfo (
    id SERIAL PRIMARY KEY,
    about TEXT,
    image TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
