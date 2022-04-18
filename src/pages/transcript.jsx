import React from "react";
import StudentDashboard from '../components/studentDashboard';
import t from '../styles/transcript.module.css'

function Transcript() {
    return (  
        <React.Fragment>
            <StudentDashboard/>

            <div className={t.course_details}>
            <h1>TRANSCRIPT</h1>
            <table className={`${t.table} ${t.table_light} ${t.table_striped} ${t.scrollable}`}>
            <tr className={t.attributes}>
                <th>Course Name</th>
                <th>Semester</th>
                <th>Percentage Grade</th>
                <th>Letter Grade</th>
                <th>GPA</th>

            </tr>
            <tr>
                <td className={t.filterable_cell}>ENGG 200</td>
                <td className={t.filterable_cell}>Fall 2019</td>
                <td className={t.filterable_cell}>98</td>
                <td className={t.filterable_cell}>A+</td>
                <td className={t.filterable_cell}>4.0</td>


            </tr>
            <tr>
            <td className={t.filterable_cell}>ENGG 201</td>
            <td className={t.filterable_cell}>Spring 2020</td>
            <td className={t.filterable_cell}>71</td>
            <td className={t.filterable_cell}>B-</td>
            <td className={t.filterable_cell}>2.7</td>

            </tr>
            <tr>
            <td className={t.filterable_cell}>CPSC 471</td>
            <td className={t.filterable_cell}>Winter 2022</td>
            <td className={t.filterable_cell}>99</td>
            <td className={t.filterable_cell}>A+</td>
            <td className={t.filterable_cell}>4.0</td>
            </tr>
            </table>
            </div>
        </React.Fragment>
    );
}

export default Transcript;
