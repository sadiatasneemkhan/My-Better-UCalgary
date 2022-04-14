import React, {Component} from 'react';
import '../styles/loginHeader.css'

class LoginHeader extends Component {

    render() { 
        return (
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
        );
    }
}
 
export default LoginHeader;