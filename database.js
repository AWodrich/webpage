const spicedPg = require('spiced-pg');
const pw = require('./password.js');


// The node-postgres module allows to query a PostgreSQL database from Node.
// To make a query a client (an object that can connect to and talk to the database) is needed.
// The most direct way to do this is to call the Client constructor that the pg module exposes.
// passing a string with the details required to make the connection. Then the connect method of the client is called to connect to the database.

if(process.env.DATABASE_URL){
    dbUrl = process.env.DATABASE_URL
} else {
    var info = require('./secret.json')
    dbUrl = `postgres:${info.username}:${info.password}@localhost:5432/adminsinfo`
}
var db = spicedPg(dbUrl);



// updating about in database

exports.updateAbout = (about) => {
    var q = `UPDATE adminsinfo
            SET about = $1`;
    var params = [about]
    return db.query(q, params)
        .then(results => {
            return results.rows[0]
        })
        .catch(err => console.log(err))
}


// updating cv in database

exports.editCV = cv => {
    var q = `UPDATE adminsinfo
            SET cv = $1`;
    var params = [cv]
    return db.query(q, params)
        .then(results => {
            return results.rows[0]
        })
        .catch(err => console.log(err))
}


// Getting all adminsinfo data

exports.getProfileData = () => {
    var q = `SELECT * FROM adminsinfo`
    return db.query(q)
        .then(data => {
            return data.rows;
        })
        .catch(err => console.log(err))
}


// insert data into adminsinfo

exports.insertProfileData = text => {
    var q = `INSERT INTO adminsinfo (about)
            VALUES ($1, $2)
            RETURNING about, cv, id`
    var params = [text]
    return db.query(q, params)
        .then(data => {
            return data.rows[0];
        })
}


// uploading uploadImages

exports.uploadImages = imageUrl => {
    var q = `UPDATE users
            SET image=$1`
    var params = [imageUrl]
    return db.query(q, params)
        .then(results => {
            return results;
        })
        .catch(err => console.log(err))
}
