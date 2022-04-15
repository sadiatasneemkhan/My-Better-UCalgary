import React, { Component } from 'react';
import LoginHeader2 from '../components/loginHeader2';
import ar from '../styles/adminRegistration.module.css'

export default function AdminRegistration (props) {
    
    return (
        <React.Fragment> 
            <LoginHeader2/>
            <div className={ar.regbox}>
                <h1>REGISTRATION</h1>

                <form method="post">
                    <div className={ar.labels}>
                        <label>Full Name</label>
                    </div>
                    <div className={ar.textfield}>
                        <input className={ar.center-block} type="text" placeholder="First Name" required />
                        <input className={ar.center-block} type="text" placeholder="Last Name" required />
                    </div>

                    <div className={ar.labels}>
                        <label>Date Joined</label>
                    </div>
                    <div className={ar.textfield}>
                    <input className={ar.center-block} type="text" placeholder="DD/MM/YYYY" required />
                    </div>

                    <div className={ar.labels}>
                        <label>Account Info</label>
                    </div>
                    <div className={ar.textfield}>
                    <input className={ar.center-block} type="text" placeholder="UCID" required />
                    <input className={ar.center-block} type="text" placeholder="Department" required />
                    <input className={ar.center-block} type="text" placeholder="Password" required />
                    <input className={ar.center-block} type="text" placeholder="Confirm Password" required />
                    </div>

                    <div className={ar.button}>
                        <input className={ar.center-block} type="submit" value="Register" />
                    </div>
                    
                </form>
            </div>
        </React.Fragment>
    );    
}
 