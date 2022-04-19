import React, { useState, useEffect, useRef } from "react";
import LoginHeader2 from "../components/loginHeader2";
import axios from "axios";
import l from "../styles/login.module.css";

// makes it so that the API is not called the moment the page is rendered
const useDidMountEffect = (fetcher) => {

    const didMount = useRef(false);

    useEffect(() => {
        if(didMount.current)
      fetcher();
      else{
          didMount.current = true;
      }
    }, []);
  };

export default function Login(props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  async function fetcher() {
    const url = `http://localhost:5001/student/checklogin?UCID=${user}&password=${pass}`;
    const { data } = await axios.get(url);
    console.log(data);
    if (data.account == "ERROR") {
      alert("The username or Password entered was not correct");
    } else if (data.account == "Admin") {
      document.location.href = `${window.location.origin}/admin?UCID=${user}`;
    } else if (data.account == "Student") {
      document.location.href = `${window.location.origin}/student?UCID=${user}`;
    }
  }

  const submission = (evt) => {
    evt.preventDefault();
    fetcher();
  };

  const useDidMountEffect = (fetcher) => {

    const didMount = useRef(false);

    useEffect(() => {
        if(didMount.current)
      fetcher();
      else{
          didMount.current = true;
      }
    }, []);
  };

  return (
    <React.Fragment>
      <LoginHeader2 />
      <div className={l.loginbox}>
        <h1>LOGIN</h1>

        <form onSubmit={submission}>
          <div className={l.textfield}>
            <input
              className={l.center_block}
              onChange={(e) => setUser(e.target.value)}
              type="text"
              placeholder="UCID"
              required
            />
          </div>

          <div className={l.textfield}>
            <input
              className={l.center_block}
              onChange={(e) => setPass(e.target.value)}
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
            Not registered yet? <a href="registration">Create an account </a>
          </div>
        </form>

        <img src="../images/loginuser.png" className={l.usericon} />
        <img src="../images/loginpassword.png" className={l.passicon} />
        <img src="../images/login.png" className={l.loginicon} />
      </div>
    </React.Fragment>
  );
}
