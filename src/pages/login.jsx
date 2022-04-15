import React, { Component } from 'react';
import LoginHeader2 from '../components/loginHeader2';
import l from '../styles/login.module.css'

export default function Login (props) {
    return (
        <React.Fragment> 
            <LoginHeader2/>
            <div className={l.loginbox}>
                <h1>LOGIN</h1>
                
                <form method="post">
                    <div className={l.textfield}>
                    <input className={l.center_block} type="text" placeholder="UCID" required />
                    </div>

                    <div className={l.textfield}>
                    <input
                        className={l.center_block}
                        type="password"
                        placeholder="Password"
                        required
                    />
                    </div>

                    <div className={l.loginfield}>
                    <input className={l.center_block} type="submit" value="Login" />
                    </div>

                    <div className={l.forgotpass}>Forgot password?</div>
                    <div className={l.createacc}>
                    Not registered yet? <a href="registration.html">Create an account </a>
                    </div>
                </form>

                <img src="../images/loginuser.png" className={l.usericon} />
                <img src="../images/loginpassword.png" className={l.passicon} />
                <img src="../images/login.png" className={l.loginicon} />
            </div>
        </React.Fragment>
    ); 
}