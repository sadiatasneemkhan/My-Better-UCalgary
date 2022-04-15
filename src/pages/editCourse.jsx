import React from "react";
import AdminDashboard from '../components/adminDashboard';
import '../styles/editCourse.css'

function EditCourse() {
    return (  
        <React.Fragment>
            <AdminDashboard/>

            <div class="course-details">
            <h1>EDIT COURSE</h1>

            <form method="post">
                <div class="labels">
                <label class="subheading">Choose a course to edit:</label>
                </div>
                <div class="textfield">
                <input
                    class="center-block"
                    type="text"
                    placeholder="Ex. CPSC 471"
                    required
                />
                </div>
                <div class="labels">
                <label class="subheading">Modify one or more attributes:</label>
                </div>
                <div class="labels">
                <label>Name</label>
                </div>
                <div class="textfield">
                <input class="center-block" type="text" placeholder="Ex. CPSC 471" />
                </div>

                <div class="labels">
                <label>Semester</label>
                </div>
                <div class="textfield">
                <input
                    class="center-block"
                    type="text"
                    placeholder="Ex. Winter 2022"
                />
                </div>

                <div class="labels">
                <label>Description</label>
                </div>
                <div class="textfield">
                <input class="center-block" type="text" placeholder="Description" />
                </div>

                <div class="labels">
                <label>Instructor's Name</label>
                </div>
                <div class="textfield same-row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                </div>

                <div class="labels">
                <label>Location</label>
                </div>
                <div class="textfield same-row">
                <input type="text" placeholder="Building" />
                <input type="text" placeholder="Room Number" />
                </div>

                <div class="labels">
                <label>Day and Time</label>
                </div>
                <div class="textfield same-row">
                <input type="text" placeholder="Ex. MWF" />
                <input type="text" placeholder="Ex. 12:00 - 14:30" />
                </div>

                <div class="labels">
                <label>Current Size and Capacity</label>
                </div>
                <div class="textfield same-row">
                <input type="text" placeholder="Number of Enrolled Students" />
                <input type="text" placeholder="Max Capacity" />
                </div>

                <div class="button">
                <input class="center-block" type="submit" value="Save" />
                </div>
            </form>
            </div>
        </React.Fragment>
    );
}

export default EditCourse;
