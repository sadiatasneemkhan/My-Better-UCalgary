import React from "react";
import StudentDashboard from '../components/studentDashboard';
import s from '../styles/transcript.module.css'

function Schedule() {

    return (  
        <React.Fragment>
            <StudentDashboard/>

            <div className={s.course_details}>
            <h1>SCHEDULE</h1>
        
            </div>
        </React.Fragment>
    );
}

export default Schedule;
