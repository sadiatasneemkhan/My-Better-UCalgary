import React, { Component } from 'react';
import LoginHeader2 from '../components/loginHeader2';
import '../styles/adminRegistration.css'

export default function AdminRegistration (props) {
    
    return (
        <React.Fragment> 
            <LoginHeader2/>
            <div classNameName="regbox">
                <h1>REGISTRATION</h1>

                <form method="post">
                    <div classNameName="labels">
                        <label>Full Name</label>
                    </div>
                    <div className="textfield">
                        <input className="center-block" type="text" placeholder="First Name" required />
                        <input className="center-block" type="text" placeholder="Last Name" required />
                    </div>

                    <div className="labels">
                        <label>Date Joined</label>
                    </div>
                    <div className="textfield">
                    <input className="center-block" type="text" placeholder="DD/MM/YYYY" required />
                    </div>

                    <div className="labels">
                        <label>Account Info</label>
                    </div>
                    <div className="textfield">
                    <input className="center-block" type="text" placeholder="UCID" required />
                    <input className="center-block" type="text" placeholder="Department" required />
                    <input className="center-block" type="text" placeholder="Password" required />
                    <input className="center-block" type="text" placeholder="Confirm Password" required />
                    </div>

                    <div className="button">
                        <input className="center-block" type="submit" value="Register" />
                    </div>
                    
                </form>
            </div>
        </React.Fragment>
    );    
}
 