import React, { Component } from 'react';
import LoginHeader2 from '../components/loginHeader2';
import '../styles/studentRegistration.css'

class StudentRegistration extends Component {
    render() { 
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
                        <label>Date of Birth</label>
                    </div>
                    <div class="textfield">
                    <input class="center-block" type="text" placeholder="DD/MM/YYYY" required />
                    </div>

                    <div class="labels">
                        <label>Home Address</label>
                    </div>
                    <div class="textfield">
                    <input class="center-block" type="text" placeholder="Address" required />
                    <input class="center-block" type="text" placeholder="Postal Code" required />
                    <input class="center-block" type="text" placeholder="City" required />
                    <input class="center-block" type="text" placeholder="Province/State" required />
                    <input class="center-block" type="text" placeholder="Country" required />
                    </div>

                    <div class="labels">
                        <label>Account Info</label>
                    </div>
                    <div class="textfield">
                    <input class="center-block" type="text" placeholder="UCID" required />
                    <input class="center-block" type="text" placeholder="Email" required />
                    <input class="center-block" type="text" placeholder="Phone Number" required />
                    <input class="center-block" type="text" placeholder="Password" required />
                    <input class="center-block" type="text" placeholder="Confirm Password" required />
                    </div>

                    <div class="labels">
                        <label>Degree Info</label>
                    </div>
                    <div class="textfield">
                    <input class="center-block" type="text" placeholder="Program - Major" required />
                    <input class="center-block" type="text" placeholder="Department" required />
                    <input class="center-block" type="text" placeholder="Year of Program" required />
                    <input class="center-block" type="text" placeholder="Program - Minor (if applicable)" />
                    <input class="center-block" type="text" placeholder="Department" required />
                    <input class="center-block" type="text" placeholder="Year of Program" />
                    </div>

                    <div class="button">
                        <input class="center-block" type="submit" value="Register" />
                    </div>
                    
                </form>
                </div>
            </React.Fragment>
        );
    }
}
 
export default StudentRegistration;