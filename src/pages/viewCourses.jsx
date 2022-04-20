import React from "react";
import AdminDashboard from '../components/adminDashboard';
import vc from '../styles/viewCourses.module.css'

function ViewCourses() {
    return (  
        <React.Fragment>
            <AdminDashboard/>

            <div className={vc.course_details}>
                <h1>COURSE VIEWER</h1>
                    <table className={`${vc.table} ${vc.table_light} ${vc.table_striped} ${vc.scrollable}`}>
                        <tr className={vc.attributes}>
                            <th>Course Name</th>
                            <th>Semester</th>
                            <th>Instuctor's Last Name</th>
                            <th>Status</th>

                        </tr>
                        <tr>
                            <td className={vc.filterable_cell}>CPSC 457</td>
                            <td className={vc.filterable_cell}>Fall 2021</td>
                            <td className={vc.filterable_cell}>Federl</td>
                            <td className={vc.filterable_cell}>Completed</td>
                        </tr>
                
                        <tr>
                        <td className={vc.filterable_cell}>CPSC 471</td>
                        <td className={vc.filterable_cell}>Winter 2022</td>
                        <td className={vc.filterable_cell}>Sailunaz</td>
                        <td className={vc.filterable_cell}>Ongoing</td>
                        </tr>
                    </table>
                
                    <div className={vc.textfield}>
                        <input 
                            className={vc.center_block} 
                            type="text" 
                            placeholder="Ex. CPSC 471" 
                            required />
                    </div>
                
                <div className={vc.button}>
                    <input className={vc.center_block} type="submit" value="Search Course(s)" />
                </div>
            </div>
        </React.Fragment>
    );
}

export default ViewCourses;
