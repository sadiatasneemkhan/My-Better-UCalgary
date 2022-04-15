const express = require("express");
const app = express();
const port = 5002;
const CourseAPI = require('./API/course');
const StudentAPI = require('./API/student');
//const ScheduleAPI = require('./API/schedule');
const AdminAPI = require('./API/admin');

// useful for parsing JSONs 
const cors = require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions));

app.use('/course',CourseAPI);
app.use('/student',StudentAPI);
//app.use('/schedule',ScheduleAPI);
app.use('/admin',AdminAPI);

// localhost:5000/student/checklogin?UCID=30098787?password=test2 -> {validity: true}

app.listen(port, () => {
console.log(`server started on ${port}`);
});




module.exports = app;