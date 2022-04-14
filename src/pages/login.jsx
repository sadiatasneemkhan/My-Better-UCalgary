import React, { Component } from 'react';
import LoginHeader2 from '../components/loginHeader2';
import '../styles/login.css'

class Login extends Component {
    render() { 
        return (
            <React.Fragment> 
                <LoginHeader2/>
                <div class="loginbox">
                    <h1>LOGIN</h1>

                    <form method="post">
                        <div class="textfield">
                        <input class="center-block" type="text" placeholder="UCID" required />
                        </div>

                        <div class="textfield">
                        <input
                            class="center-block"
                            type="password"
                            placeholder="Password"
                            required
                        />
                        </div>

                        <div class="loginfield">
                        <input class="center-block" type="submit" value="Login" />
                        </div>

                        <div class="forgotpass">Forgot password?</div>
                        <div class="createacc">
                        Not registered yet? <a href="registration.html">Create an account </a>
                        </div>
                    </form>

                    <img src="../images/loginuser.png" class="usericon" />
                    <img src="../images/loginpassword.png" class="passicon" />
                    <img src="../images/login.png" class="loginicon" />
                </div>
            </React.Fragment>
        );
    }
}
 
export default Login;