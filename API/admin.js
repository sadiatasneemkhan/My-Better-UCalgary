const express = require("express");
const db = require("../db");

const router = express.Router();

// endpoint 4
// http://localhost:5001/admin/createadmin?First_name=Sam&Last_name=Fam&UCID=19999999&pass=password123&date=06262001
router.post('/createadmin',(req,res) =>{
 
  let fName = req.query.First_name;
  let lName = req.query.Last_name;
  let UCID = req.query.UCID;
  let pass = req.query.pass;
  let date = req.query.date;
  let properDate =
  date.substring(0, 2) + "/" + date.substring(2, 4) + "/" + date.substring(4);
let test = false;
  let query = `INSERT INTO ACCOUNT VALUES(${UCID},'${pass}')`
  db.query(query, (err, result) => {
    if (err) throw err;
   test = true;
  });
  let query2 = `INSERT INTO SYSTEM_ADMIN VALUES (${UCID},'${fName}','${lName}','${properDate}',${UCID})`
  db.query(query2, (err, result) => {
    if (err) throw err;
    if(test === true){
      res.send({'UCID': UCID});
    }
  });
});


router.get("/getadmins", (req, res) => {
  let query = `SELECT * FROM ACCOUNT`;
  db.query(query, (err, result) => {
    if (err) throw err;
    else return res.json(result);
  });
});

module.exports = router;
