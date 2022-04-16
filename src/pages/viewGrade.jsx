import React from "react";
import AdminDashboard from '../components/adminDashboard';
import vg from '../styles/viewGrade.module.css'

function ViewGrade() {
    return (  
        <React.Fragment>
            <AdminDashboard/>

            <div className={vg.course_details}>
            <h1>STUDENT GRADES</h1>
                <table className={`${vg.table} ${vg.table_light} ${vg.table_striped} ${vg.scrollable}`}>
            <tr className={vg.attributes}>
                <th>Student ID</th>
                <th>Course Name</th>
                <th>Semester</th>
                <th>Letter GPA</th>
            </tr>
            <tr>
                <td className={vg.filterable_cell}>30090257</td>
                <td className={vg.filterable_cell}>ENGG 200</td>
                <td className={vg.filterable_cell}>Fall 2019</td>
                <td className={vg.filterable_cell}>A+</td>
            </tr>
            <tr>
            <td className={vg.filterable_cell}>30071766</td>
            <td className={vg.filterable_cell}>ENGG 200</td>
            <td className={vg.filterable_cell}>Spring 2020</td>
            <td className={vg.filterable_cell}>B-</td>
            </tr>
            <tr>
            <td className={vg.filterable_cell}>30045153</td>
            <td className={vg.filterable_cell}>CPSC 471</td>
            <td className={vg.filterable_cell}>Winter 2022</td>
            <td className={vg.filterable_cell}>A+</td>
            </tr>
            </table>
            <div className={vg.in}>
                <input type="number"/>
                <span 
                    id="search" 
                    onclick="SearchStudentGrades()" 
                    className={`${vg.btn} ${vg.btn_outline_light}`}>
                        Search Student</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ViewGrade;
