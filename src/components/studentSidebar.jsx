import React, { Component } from 'react';
import ss from '../styles/sidebar.module.css'

function StudentSidebar () {
    return (  
        <React.Fragment>
            <div className={ss.sidebar}>
                <span className={ss.left_jus}>DASHBOARD</span>

                <div className={ss.menuoptions}>
                    <a className={ss.left_jus} href="transcript.html">Transcript</a>
                    <a className={ss.left_jus} href="calculator.html">Grade Calculator</a>
                    <a className={ss.left_jus} href="schedule.html">Schedule</a>
                    <a className={ss.left_jus} href="enrollcourse.html">Enroll into a Course</a>
                    <a className={ss.left_jus} href="dropcourse.html">Drop a Course</a>
                    <a className={ss.left_jus} href="degreetracker.html">Degree Tracker</a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default StudentSidebar ;