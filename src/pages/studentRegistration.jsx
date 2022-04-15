import React, { Component } from 'react';
import LoginHeader2 from '../components/loginHeader2';
import '../styles/studentRegistration.css'

export default function StudentRegistration (props) {

    return (
        <React.Fragment> 
            <LoginHeader2/>
            <div className="regbox">
            <h1>REGISTRATION</h1>

            <form method="post">
                <div className="labels">
                    <label>Full Name</label>
                </div>
                <div className="textfield">
                    <input className="center-block" type="text" placeholder="First Name" required />
                    <input className="center-block" type="text" placeholder="Last Name" required />
                </div>

                <div className="labels">
                    <label>Date of Birth</label>
                </div>
                <div className="textfield">
                <input className="center-block" type="text" placeholder="DD/MM/YYYY" required />
                </div>

                <div className="labels">
                    <label>Home Address</label>
                </div>
                <div className="textfield">
                <input className="center-block" type="text" placeholder="Address" required />
                <input className="center-block" type="text" placeholder="Postal Code" required />
                <input className="center-block" type="text" placeholder="City" required />
                <input className="center-block" type="text" placeholder="Province/State" required />
                <input className="center-block" type="text" placeholder="Country" required />
                </div>

                <div className="labels">
                    <label>Account Info</label>
                </div>
                <div className="textfield">
                <input className="center-block" type="text" placeholder="UCID" required />
                <input className="center-block" type="text" placeholder="Email" required />
                <input className="center-block" type="text" placeholder="Phone Number" required />
                <input className="center-block" type="text" placeholder="Password" required />
                <input className="center-block" type="text" placeholder="Confirm Password" required />
                </div>

                <div className="labels">
                    <label>Degree Info</label>
                </div>
                <div className="textfield">
                <input className="center-block" type="text" placeholder="Program - Major" required />
                <input className="center-block" type="text" placeholder="Department" required />
                <input className="center-block" type="text" placeholder="Year of Program" required />
                <input className="center-block" type="text" placeholder="Program - Minor (if applicable)" />
                <input className="center-block" type="text" placeholder="Department" required />
                <input className="center-block" type="text" placeholder="Year of Program" />
                </div>

                <div className="button">
                    <input className="center-block" type="submit" value="Register" />
                </div>
                
            </form>
            </div>
        </React.Fragment>
    );
}
 