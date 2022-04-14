import React, { Component } from 'react';
import LoginHeader2 from '../components/loginHeader2';
import '../styles/registration.css'

class Registration extends Component {
    render() { 
        return (
            <React.Fragment> 
                <LoginHeader2/>
                <h1>REGISTER AS</h1>
                <div class="btn">
                
                <button
                    type="button"
                    class="button margin-right student"
                    onclick="window.location.href='studentregistration.html'"
                >
                    <span class="buttontext">STUDENT</span>
                </button>
                
                <button
                    type="button"
                    class="button admin"
                    onclick="window.location.href='adminregistration.html'"
                >
                    <span class="buttontext">ADMIN</span>
                </button>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Registration;