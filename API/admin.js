const express = require('express');
const db = require('../db');


const router = express.Router();

// endpoint 4
router.post('/createAdmin',(req,res) =>{
    let fName = req.query.First_name;
    let lName = req.query.Last_name;
    let UCID = req.query.UCID;
    let pass = req.query.pass;
    let date = req.query.date_Of_start;

    let query = `
    INSERT INTO ACCOUNT
    VALUES(${UCID},${pass});
    INSERT INTO SYSTEM_ADMIN
    VALUES (${UCID},${fName},${lName},${date},${UCID});
    `
  db.query(query,(err) =>{
        if(err) throw err
        else return res.send({id: UCID});
    });
    });


    
    module.exports = router;