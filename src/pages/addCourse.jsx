import React from "react";
import AdminDashboard from '../components/adminDashboard';
import '../styles/addCourse.css'

function AddCourse() {
    return (  
        <React.Fragment>
            <AdminDashboard/>

            <div class="course-details">
            <h1>ADD COURSE</h1>

            <form method="post">
                <div class="labels">
                <label>Name</label>
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
                <label>Semester</label>
                </div>
                <div class="textfield">

                <input
                    class="center-block"
                    type="text"
                    placeholder="Ex. Winter 2022"
                    required
                />
                </div>

                <div class="labels">
                <label>Description</label>
                </div>
                <div class="textfield">

                <input
                    class="center-block"
                    type="text"
                    placeholder="Description"
                    required
                />
                </div>

                <div class="labels">
                <label>Instructor's Name</label>
                </div>
                <div class="textfield">

                <input
                    class="center-block"
                    type="text"
                    placeholder="First Name"
                    required
                />
                <input
                    class="center-block"
                    type="text"
                    placeholder="Last Name"
                    required
                />
                </div>

                <div class="labels">
                <label>Location</label>
                </div>
                <div class="textfield">

                <input
                    class="center-block"
                    type="text"
                    placeholder="Building"
                    required
                />
                <input
                    class="center-block"
                    type="text"
                    placeholder="Room Number"
                    required
                />
                </div>

                <div class="labels">
                <label>Day and Time</label>
                </div>
                <div class="textfield">

                <input
                    class="center-block"
                    type="text"
                    placeholder="Ex. MWF"
                    required
                />

                <input
                    class="center-block"
                    type="text"
                    placeholder="Ex. 12:00 - 14:30"
                    required
                />
                </div>

                <div class="labels">
                <label>Number of Enrolled Students</label>
                </div>
                <div class="textfield">
                <input
                    class="center-block"
                    type="text"
                    placeholder="0 - Max Capacity"
                    required
                />
                </div>

                <div class="labels">
                <label>Max Capacity</label>
                </div>
                <div class="textfield">
                <input
                    class="center-block"
                    type="text"
                    placeholder="Max Capacity"
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

export default AddCourse;
