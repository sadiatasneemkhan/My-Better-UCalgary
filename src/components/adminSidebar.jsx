import React, { Component } from 'react';
import as from '../styles/sidebar.module.css'

function AdminSidebar () {
    return (  
        <React.Fragment>
            <div className={as.sidebar}>
                <span className={as.left_jus}>DASHBOARD</span>

                <div className={as.menuoptions}>
                    <a className={as.left_jus} href="courselist.html">Course List</a>
                    <a className={as.left_jus} href="updatecourse.html">Update Course</a>
                    <a className={as.left_jus} href="viewgrade.html">View Student's Grade</a>
                    <a className={as.left_jus} href="addgrade.html">Add Student's Grade</a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AdminSidebar ;