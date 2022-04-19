import React, { useState, useEffect } from "react";
import StudentDashboard from "../components/studentDashboard";
import dt from "../styles/degreeTracker.module.css";
import axios from "axios";
function DegreeTracker() {
  const id = "30091234";
// data is in this variable 
  const [courses, setCourses] = useState([
    {
      UCID: 0,
      Major: "",
      Minor: "",
      Major_year: 0,
      Minor_year: 0,
    }
  ]);
  var url;
  async function fetcher() {
    const findIfMinorURL = `http://localhost:5001/student/studentInfo?UCID=${id}`;
    const whichUrl = await axios.get(findIfMinorURL);
    const check = whichUrl.data;
   
    if (check[0].appears == 1) {
      url = `http://localhost:5001/student/studentInfomm?UCID=${id}`;
    } else {
      url = `http://localhost:5001/student/studentInfom?UCID=${id}`;
    }
    //const studentInfo = await axios.get();
    const course = await axios.get(url);
    setCourses(course.data);
    
  }

  useEffect(() => {
    fetcher();
  }, []);

  console.log(courses);
  function Test() {
    console.log(courses);
    
    return courses.map((c) => (
        
      <React.Fragment key={c.UCID}>
        <h2 className={dt.left_jus}>DEGREE(S)</h2>
        
        <div className={`${dt.major} ${dt.txt}`}>
          Major: <p>{c.Major}</p>
        </div>
        <div className={`${dt.yop} ${dt.txt}`}>
          Year of Program: {c.Major_year}
        </div>
      </React.Fragment>
    ));
  }
  return (
    <React.Fragment>
      <StudentDashboard />

      <h1>DEGREE TRACKER</h1>
      <Test />

      <h2 className={dt.left_jus}>COURSES COMPLETED</h2>
    </React.Fragment>
  );
}

export default DegreeTracker;
