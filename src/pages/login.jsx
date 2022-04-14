import React, { Component } from 'react';
import LoginHeader2 from '../components/loginHeader2';
import '../styles/login.css'

class Login extends Component {
    render() { 
        return (
            <React.Fragment> 
                <LoginHeader2/>
                <div className="loginbox">
                    <h1>LOGIN</h1>
                    
                    <form method="post">
                        <div className="textfield">
                        <input className="center-block" type="text" placeholder="UCID" required />
                        </div>

                        <div className="textfield">
                        <input
                            className="center-block"
                            type="password"
                            placeholder="Password"
                            required
                        />
                        </div>

                        <div className="loginfield">
                        <input className="center-block" type="submit" value="Login" />
                        </div>

                        <div className="forgotpass">Forgot password?</div>
                        <div className="createacc">
                        Not registered yet? <a href="registration.html">Create an account </a>
                        </div>
                    </form>

                    <img src="../images/loginuser.png" className="usericon" />
                    <img src="../images/loginpassword.png" className="passicon" />
                    <img src="../images/login.png" className="loginicon" />
                </div>
            </React.Fragment>
        );
    }
}
 
export default Login;