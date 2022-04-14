import React, { Component } from 'react';
import LoginHeader2 from '../components/loginHeader2';
import '../styles/adminRegistration.css'

export default function AdminRegistration (props) {
    
    return (
        <React.Fragment> 
            <LoginHeader2/>
            <div class="regbox">
                <h1>REGISTRATION</h1>

                <form method="post">
                    <div class="labels">
                        <label>Full Name</label>
                    </div>
                    <div class="textfield">
                        <input class="center-block" type="text" placeholder="First Name" required />
                        <input class="center-block" type="text" placeholder="Last Name" required />
                    </div>

                    <div class="labels">
                        <label>Date Joined</label>
                    </div>
                    <div class="textfield">
                    <input class="center-block" type="text" placeholder="DD/MM/YYYY" required />
                    </div>

                    <div class="labels">
                        <label>Account Info</label>
                    </div>
                    <div class="textfield">
                    <input class="center-block" type="text" placeholder="UCID" required />
                    <input class="center-block" type="text" placeholder="Department" required />
                    <input class="center-block" type="text" placeholder="Password" required />
                    <input class="center-block" type="text" placeholder="Confirm Password" required />
                    </div>

                    <div class="button">
                        <input class="center-block" type="submit" value="Register" />
                    </div>
                    
                </form>
            </div>
        </React.Fragment>
    );    
}
 