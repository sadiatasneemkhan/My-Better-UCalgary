import React from "react";
import StudentDashboard from '../components/studentDashboard';
import dt from '../styles/degreeTracker.module.css'

function DegreeTracker() {
    return (  
        <React.Fragment>
            <StudentDashboard/>

            <h1>DEGREE TRACKER</h1>

            <h2 className={dt.left_jus}>DEGREE(S)</h2>
            <div className={`${dt.text} ${dt.left_jus}`}>
            <div className={`${dt.major} ${dt.txt}`}>Major:</div>
            <div className={`${dt.yop} ${dt.txt}`}>Year of Program:</div>
            <div className={`${dt.minor} ${dt.txt}`}>Minor:</div>
            <div className={`${dt.yop} ${dt.txt}`}>Year of Program:</div>
            </div>

            <h2 className={dt.left_jus}>COURSES COMPLETED</h2>
        </React.Fragment>
    );
}

export default DegreeTracker;
