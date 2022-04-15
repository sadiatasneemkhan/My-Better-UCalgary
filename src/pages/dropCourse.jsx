import React from "react";
import StudentDashboard from '../components/studentDashboard';
import '../styles/dropCourse.css'

function DropCourse() {
    return (  
        <React.Fragment>
            <StudentDashboard/>

            <div class="course-details">
            <h1>DROP COURSE</h1>

            <form method="post">
                <div class="labels">
                <label>Choose the course you wish to drop:</label>
                </div>
                <div class="textfield">
              
                <input
                    class="center-block"
                    type="text"
                    placeholder="Ex. CPSC 471"
                    required
                />
                </div>
  
                <div class="button">
                <input class="center-block" type="submit" value="Save" />
                </div>
            </form>
            </div>
        </React.Fragment>
    );
}

export default DropCourse;
