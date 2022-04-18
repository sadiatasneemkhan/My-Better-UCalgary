import React from "react";
import StudentDashboard from '../components/studentDashboard';
import dc from '../styles/dropCourse.module.css'

function DropCourse() {
    return (  
        <React.Fragment>
            <StudentDashboard/>

            <div className={dc.course_details}>
            <h1>DROP COURSE</h1>

            <form method="post">
                <div className={dc.labels}>
                <label>Choose the course you wish to drop:</label>
                </div>
                <div className={dc.textfield}>
              
                <input
                    className={dc.center_block}
                    type="text"
                    placeholder="Ex. CPSC 471"
                    required
                />
                </div>
  
                <div className={dc.button}>
                <input className={dc.center_block} type="submit" value="Save" />
                </div>
            </form>
            </div>
        </React.Fragment>
    );
}

export default DropCourse;