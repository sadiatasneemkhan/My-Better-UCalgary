const express = require('express');
const db = require('../db');
const QString = require('query-string');

const router = express.Router();
// endpoint 1 & 2
router.get("/checkLogin",(req,res) =>{

    let ucid = req.query.UCID;
     let pass = req.query.password;

    let query = `SELECT * FROM ACCOUNT WHERE UCID ='${ucid}' AND password='${pass}'`;
    console.log(query);
    db.query(query,(err,result) =>{
        if(err) throw err

        if(result.length == 0){
            res.send({validity: false})
        }else{
            res.send({validity:true})
        }
    });
});
// endpoint 3
router.post('/createStudent',(req,res) =>{
let fName = req.query.First_name;
let lName = req.query.Last_name;
let dob = req.query.Date_of_birth;
let addr = req.query.Address;
let Postal = req.query.Postalcode;
let City = req.query.City;
let Province = req.query.Province;
let Country = req.query.Country;
let UCID = req.query.UCID;
let email = req.query.email;
let Phone = req.query.Phone_number;
let pass = req.query.pass;
let prog = req.query.Program;
let min = req.query.Minor;
let deptname = req.query.Dept_name;
let yop = req.query.Year_of_program;
let yom = req.query.Year_of_minor;
let dept_min = req.query.minor_dept;

let query = `
INSERT INTO ACCOUNT
VALUES(${UCID},${pass});
INSERT INTO STUDENT
VALUES (${UCID},${fName},${lName},${dob},${Phone},${addr},${Postal},${City},${Province},${Country},${email},${UCID});
INSERT INTO MAJORS_IN
VALUES(${UCID},${prog},${yop},${deptname});`


if(min !== null && yom !== null && dept_min !== null){
    query += `INSERT INTO MINORS_IN 
    VALUES(${UCID},${min},${yom},${dept_min});`
}
db.query(query,(err) =>{
    if(err) throw err
    else return res.send({id: UCID});
});
});
 // endpoint 9
router.get('/getGrades',(req,res) => {

    let UCID = req.query.UCID;

    let query = `SELECT * FROM GRADE WHERE S_UCID = '${UCID}'`;

    //generic query 
    db.query(query,(err,result) =>{
        if(err) throw err
        else return res.json(result);
    });
});
module.exports = router;