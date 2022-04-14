import React, {Component} from 'react';
import '../styles/loginHeader.css'

class LoginHeader2 extends Component {

    render() { 
        return (
            <React.Fragment>
                <div className="header">
                <div className="login">
                    <button
                    className="log-in-button"
                    onClick={event =>  window.location.href='../pages/login.jsx'}
                    >
                    LOGIN
                    </button>
                </div>
            </div>
            <img src="../images/logo.png" class="unilogo" />
            </React.Fragment>
            
        );
    }
}
 
export default LoginHeader2;