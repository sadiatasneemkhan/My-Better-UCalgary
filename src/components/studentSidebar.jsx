import React, { Component } from 'react';
import ss from '../styles/sidebar.module.css'

function StudentSidebar () {

    let ucid;
    let i = new URLSearchParams(window.location.href.split("?")[1]);
    i.forEach((para) => {
      ucid = para;
    });
    
    return (  
        <React.Fragment>
            <div className={ss.sidebar}>
                <span className={ss.left_jus}>DASHBOARD</span>

                <div className={ss.menuoptions}>
                    <a className={ss.left_jus} href={`/student/transcript?UCID=${ucid}`}>Transcript</a>
                    <a className={ss.left_jus} href={`/student/calculator?UCID=${ucid}`}>Grade Calculator</a>
                    <a className={ss.left_jus} href={`/student/schedule?UCID=${ucid}`}>Schedule</a>
                    <a className={ss.left_jus} href={`/student/enrollCourse?UCID=${ucid}`}>Enroll into a Course</a>
                    <a className={ss.left_jus} href={`/student/dropCourse?UCID=${ucid}`}>Drop a Course</a>
                    <a className={ss.left_jus} href={`/student/degreeTracker?UCID=${ucid}`}>Degree Tracker</a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default StudentSidebar ;