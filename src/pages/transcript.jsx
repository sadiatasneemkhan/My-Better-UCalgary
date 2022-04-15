import React from "react";
import StudentDashboard from '../components/studentDashboard';
import '../styles/transcript.css'

function Transcript() {
    return (  
        <React.Fragment>
            <StudentDashboard/>

            <div className="course-details">
            <h1>TRANSCRIPT</h1>
                <table className="table table-light table-striped scrollable">
            <tr className="attributes">
                <th>Course Name</th>
                <th>Semester</th>
                <th>Percentage Grade</th>
                <th>Letter Grade</th>
                <th>GPA</th>

            </tr>
            <tr>
                <td className="filterable-cell">ENGG 200</td>
                <td className="filterable-cell">Fall 2019</td>
                <td className="filterable-cell">98</td>
                <td className="filterable-cell">A+</td>
                <td className="filterable-cell">4.0</td>


            </tr>
            <tr>
            <td className="filterable-cell">ENGG 201</td>
            <td className="filterable-cell">Spring 2020</td>
            <td className="filterable-cell">71</td>
            <td className="filterable-cell">B-</td>
            <td className="filterable-cell">2.7</td>

            </tr>
            <tr>
            <td className="filterable-cell">CPSC 471</td>
            <td className="filterable-cell">Winter 2022</td>
            <td className="filterable-cell">99</td>
            <td className="filterable-cell">A+</td>
            <td className="filterable-cell">4.0</td>
            </tr>
            </table>
            </div>
        </React.Fragment>
    );
}

export default Transcript;
