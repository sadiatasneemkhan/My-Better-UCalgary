const express = require("express");
const mysql = require("mysql");
const db = require('./db');
const app = express();

const port = 5000;

app.get("/api/test", (req,res) =>{
let query = "SELECT * FROM MAJORS_IN";

db.query(query,(err,result) =>{
    if(err) throw err;
    console.log(result);
    res.json(result);
})

});

app.listen(port, () => {
console.log(`server started on ${port}`);
});

