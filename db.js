const mysql = require("mysql")

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'turWhale929',
    database: 'mybetterucalgary'
})

module.exports = db;