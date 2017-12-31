const spicedPg = require('spiced-pg');
const pw = require('./password.js');


if(process.env.DATABASE_URL){
    dbUrl = process.env.DATABASE_URL
} else {
    var info = require('./secret.json')
    dbUrl = `postgres:${info.username}:${info.password}@localhost:5432/mypage.sql`
}
var db = spicedPg(dbUrl);



exports.updatedProfile = text => {
    var q = `INSERT INTO profile (about)
            VALUES ($1)
            RETURNING about, id`;
    var params = [text]
    return db.query(q, params)
        .then(results => {
            console.log('results in database', results);
            return results.rows
        })
        .catch(err => {
            console.log(err);
        })
}
