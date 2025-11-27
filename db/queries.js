const pool = require('./pool')

async function getAllUsernames() {
    const {rows } = await pool.query("SELECT * FROM messages")
    return rows;
}

async function insertIntoMessages(username, textstring){
    await pool.query("INSERT INTO messages (username, textstring) VALUES($1, $2)", [username, textstring])
}

module.exports = {
    getAllUsernames,
    insertIntoMessages
}