import React, { Component } from 'react';
import as from '../styles/sidebar.module.css'

function AdminSidebar () {

    let UCID;
    let i = new URLSearchParams(window.location.href.split("?")[1]);
    i.forEach((para) => {
      UCID = para;
    });

    return (  
        <React.Fragment>
            <div className={as.sidebar}>
                <span className={as.left_jus}>DASHBOARD</span>

                <div className={as.menuoptions}>
                    <a className={as.left_jus} href={`/admin/viewCourse?UCID=${UCID}`}>Course List</a>
                    <a className={as.left_jus} href={`/admin/updateCourse?UCID=${UCID}`}>Update Course</a>
                    <a className={as.left_jus} href={`/admin/viewGrade?UCID=${UCID}`}>View Student's Grade</a>
                    <a className={as.left_jus} href={`/admin/addGrade?UCID=${UCID}`}>Add Student's Grade</a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AdminSidebar ;