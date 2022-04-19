import React from "react";
import AdminDashboard from '../components/adminDashboard';
import uc from  '../styles/updateCourse.module.css'

function UpdateCourse() {
    let ucid;
    let i = new URLSearchParams(window.location.href.split("?")[1]);
    i.forEach((para) => {
      ucid = para;
    });
    return (  
        <React.Fragment>
            <AdminDashboard/>

            <h1 className={uc.header}>UPDATE COURSE</h1>

            <div className={uc.btn}>
            <button
                type="button"
                className={`${uc.bt} ${uc.margin_right} ${uc.add}`}
                onClick={event =>  window.location.href=`/admin/addCourse?UCID=${ucid}`}
            >
                <span className={uc.buttontext}>ADD</span>
            </button>

            <button
                type="button"
                className={`${uc.bt} ${uc.margin_right} ${uc.edit}`}
                onClick={event =>  window.location.href=`/admin/editCourse?UCID=${ucid}`}
            >
                <span className={uc.buttontext}>EDIT</span>
            </button>
            
            <button
                type="button"
                className={`${uc.bt} ${uc.remove}`}
                onClick={event =>  window.location.href=`/admin/removeCourse?UCID=${ucid}`}
            >
                <span className={uc.buttontext}>REMOVE</span>
            </button>
            </div>
        </React.Fragment>
    );
}

export default UpdateCourse;
