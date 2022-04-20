const express = require('express');
const db = require('../db');


const router = express.Router();
// endpoint 11
// http://localhost:5000/schedule/enroll?Course_name=PSYC 200&Semester=Fall 2021&Sucid=30091234
router.post('/enroll',(req,res)=>{
    console.log(req)
    let name = req.query.Course_name;
    let sem = req.query.Semester;
    let S_UCID = req.query.Sucid;
    let query = `INSERT INTO ENROLLED_IN VALUES (${S_UCID},'${name}','${sem}')`

    db.query(query,(err,result) =>{
        if (err) console.error(err);
        else return res.send({'UCID' : S_UCID});
    });

})
// endpoint 12
// http://localhost:5000/schedule/drop?Course_name=PSYC 200&Semester=Fall 2021&Sucid=30091234&Sysucid=12345678
router.delete('/drop',(req,res)=>{
console.log(req.query);
    let name = req.query.Course_name;
    let sem = req.query.Semester;
    let S_UCID = req.query.Sucid;
    let query = `DELETE FROM ENROLLED_IN WHERE S_UCID=${S_UCID} AND Course_name = '${name}' AND Semester = '${sem}'`

    db.query(query,(err,result) =>{
        if (err) console.error(err);
        else return res.json(result);
    });


})
module.exports = router;
