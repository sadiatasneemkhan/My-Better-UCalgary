import React, { Component } from 'react';
import ss from '../styles/sidebar.module.css'

function StudentSidebar () {
    return (  
        <React.Fragment>
            <div className={ss.sidebar}>
                <span className={ss.left_jus}>DASHBOARD</span>

                <div className={ss.menuoptions}>
                    <a className={ss.left_jus} href="/student/transcript">Transcript</a>
                    <a className={ss.left_jus} href="/student/calculator">Grade Calculator</a>
                    <a className={ss.left_jus} href="/student/schedule">Schedule</a>
                    <a className={ss.left_jus} href="/student/enrollCourse">Enroll into a Course</a>
                    <a className={ss.left_jus} href="/student/dropCourse">Drop a Course</a>
                    <a className={ss.left_jus} href="/student/degreeTracker">Degree Tracker</a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default StudentSidebar ;