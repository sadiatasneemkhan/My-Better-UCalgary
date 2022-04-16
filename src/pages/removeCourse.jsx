import React from "react";
import AdminDashboard from '../components/adminDashboard';
import rc from '../styles/removeCourse.module.css'

function RemoveCourse() {
    return (  
        <React.Fragment>
            <AdminDashboard/>

            <div className={rc.course_details}>
            <h1>REMOVE COURSE</h1>

            <form method="post">
                <div className={rc.labels}>
                <label>Choose the course you wish to remove:</label>
                </div>
                <div className={rc.textfield}>
                    
                <input
                    className={rc.center_block}
                    type="text"
                    placeholder="Ex. CPSC 471"
                    required
                />
                </div>
                
                <div className={rc.button}>
                <input className={rc.center_block} type="submit" value="Save" />
                </div>
            </form>
            </div>
        </React.Fragment>
    );
}

export default RemoveCourse;
