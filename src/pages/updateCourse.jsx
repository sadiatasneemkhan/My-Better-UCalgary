import React from "react";
import AdminDashboard from '../components/adminDashboard';
import '../styles/updateCourse.css'

function UpdateCourse() {
    return (  
        <React.Fragment>
            <AdminDashboard/>

            <h1>UPDATE COURSE</h1>

            <div class="btn">
            <button
                type="button"
                class="button margin-right add"
                onclick="window.location.href='addcourse.html'"
            >
                <span class="buttontext">ADD</span>
            </button>
            <button
                type="button"
                class="button margin-right edit"
                onclick="window.location.href='editcourse.html'"
            >
                <span class="buttontext">EDIT</span>
            </button>
            <button
                type="button"
                class="button remove"
                onclick="window.location.href='removecourse.html'"
            >
                <span class="buttontext">REMOVE</span>
            </button>
            </div>
        </React.Fragment>
    );
}

export default UpdateCourse;
