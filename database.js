const spicedPg = require('spiced-pg');
const pw = require('./password.js');


if(process.env.DATABASE_URL){
    dbUrl = process.env.DATABASE_URL
} else {
    var info = require('./secret.json')
    dbUrl = `postgres:${info.username}:${info.password}@localhost:5432/socialNetwork`
}
var db = spicedPg(dbUrl);


// 1. Store user data after registration
exports.storeRegistrationData = (first, last, email, hashedPassword, imgUrl) => {
    var q = `INSERT INTO users (first, last, email, hashed_password, image)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, image`;
    var params = [first, last, email, hashedPassword, imgUrl];
    return db.query(q, params)
        .then(results => {
            return results.rows[0].id
        }).catch(err => {
            console.log(err);
        });
};


// 2. Getting Login Credential for authorization
exports.getLoginCreds = (email) => {
    var q = `SELECT email, hashed_password, id, image, bios
            FROM users
            WHERE email = $1`
    var params = [email]
    return db.query(q, params)
        .then(data => {
            return data.rows[0];
        })
        .catch(err => {
            console.log(err);
        })
}


// 3. Getting User Info Data, and rendering profilePic
exports.getUserInfo = (id) => {
    var q = `SELECT first, last, bios, image, id
            FROM users
            WHERE id = $1`
    var params = [id]
    return db.query(q, params)
        .then(userInfo => {
            return userInfo.rows[0]
        })
        .catch(err => {
            console.log(err);
        })
}


// 4. Uploading Profile images// ==== uploading images and storing into database
exports.uploadImages = (imageUrl, id) => {
    var q = `UPDATE users
            SET image=$1
            WHERE id=$2`
    var params = [imageUrl, id]
    return db.query(q, params)
        .then(results => {
            return results;
        })
        .catch(err => {
            console.log(err);
        })
}


// 5. Updating Bio
exports.updatedBio = (text, id) => {
    var q =`UPDATE users
            SET bios=$1
            WHERE id=$2`
    var params = [text, id]
    return db.query(q, params)
        .then(results => {
            return results
        })
        .catch(err => {
            console.log(err);
        })
}



// 7. Check Friendship status
exports.checkFriendStatus = (recipient_id, loggedInUser_id) => {
    var q = `SELECT * FROM friend_status
            WHERE sender_id = $2 AND recipient_id = $1
            OR recipient_id = $2 AND sender_id = $1`
    var params = [recipient_id, loggedInUser_id]
    return db.query(q, params)
        .then(data => {
            return data.rows[0]
        })
}

// 8. Update Friendship status
exports.insertFriendStatus = (newStatus, loggedInUserId, recipientId) => {
    var q = `INSERT INTO friend_status (status, sender_id, recipient_id)
            VALUES($1, $2, $3)
            RETURNING status`
    var params = [newStatus, loggedInUserId, recipientId]
    return db.query(q, params)
        .then(insertedStatus => {
            return insertedStatus.rows[0]
        })
}

// 9.TestDatabase query

exports.checkFriendStatusAfterLogin = (loggedInUser_id) => {
    var q = `SELECT status FROM friend_status
            WHERE recipient_id = $1`
    var params = [loggedInUser_id]
    return db.query(q, params)
        .then(status => {
            return status.rows[0]
        })
}

// 10. Update friendstatus
exports.updateFriendshipStatus = (newStatus, loggedInUserId, reciptientId) => {
    var q = `UPDATE friend_status
            SET status = $1
            WHERE sender_id = $2 AND recipient_id = $3
            OR sender_id = $3 AND recipient_id = $2 `
    var params = [newStatus, loggedInUserId, reciptientId]
    return db.query(q, params)
        .then(result => {
            return result
        })
}

// 11. delete Friend
exports.deleteFriendStatus = (idSender, idRecipient) => {
    var q = `DELETE FROM friend_status
        WHERE sender_id = $1 AND recipient_id = $2
        OR recipient_id = $1 AND sender_id = $2`
    var params = [idSender, idRecipient]
    return db.query(q, params)
        .then(result => {
            return result;
        })
}

// 12. Get Friends for Friends List
exports.getFriends = (idUser) => {
    var q = `SELECT users.first, users.last, users.image, users.id, friend_status.status
            FROM friend_status
            JOIN users
            ON (friend_status.status = 1 AND friend_status.recipient_id = $1 AND friend_status.sender_id = users.id)
            OR (friend_status.status = 3 AND friend_status.recipient_id = $1 AND friend_status.sender_id = users.id)
            OR (friend_status.status = 3 AND friend_status.sender_id = $1 AND friend_status.recipient_id = users.id)`
    var params = [idUser]
    return db.query(q, params)
        .then(usersList => {
            return usersList.rows
        })
}