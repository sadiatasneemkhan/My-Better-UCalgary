const mysql = require("mysql")
const local = require('./localuser.json');
const db = mysql.createConnection({
    host: 'localhost',
    user: local.user,
    password: local.password,
    database: 'mybetterucalgary'
})

module.exports = db;