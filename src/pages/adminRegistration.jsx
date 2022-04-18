import React, { Component } from 'react';
import LoginHeader2 from '../components/loginHeader2';
import axios from "axios";
import ar from '../styles/adminRegistration.module.css'

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

  //http://localhost:5001/admin/createadmin?First_name=${fname}&Last_name=${lname}&UCID=${user}&pass=${pass}&date=${date}

export default function AdminRegistration (props) {
    
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [date, setDate] = useState("");

    async function fetcher() {
        const url = `http://localhost:5001/student/checklogin?UCID=${user}&password=${pass}`;
        const { data } = await axios.get(url);
        console.log(data);
        if (data.account == "ERROR") {
        alert("The username or Password entered was not correct");
        } else if (data.account == "Admin") {
        document.location.href = `${window.location.origin}/admin/?ucid=${user}`;
        } else if (data.account == "Student") {
        document.location.href = `${window.location.origin}/student/?ucid=${user}`;
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
            <LoginHeader2/>
            <div className={ar.regbox}>
                <h1>REGISTRATION</h1>

                <form method="post">
                    <div className={ar.labels}>
                        <label>Full Name</label>
                    </div>
                    <div className={ar.textfield}>
                        <input className={ar.center_block} type="text" placeholder="First Name" required />
                        <input className={ar.center_block} type="text" placeholder="Last Name" required />
                    </div>

                    <div className={ar.labels}>
                        <label>Date Joined</label>
                    </div>
                    <div className={ar.textfield}>
                    <input className={ar.center_block} type="text" placeholder="DD/MM/YYYY" required />
                    </div>

                    <div className={ar.labels}>
                        <label>Account Info</label>
                    </div>
                    <div className={ar.textfield}>
                    <input className={ar.center_block} type="text" placeholder="UCID" required />
                    <input className={ar.center_block} type="text" placeholder="Department" required />
                    <input className={ar.center_block} type="text" placeholder="Password" required />
                    <input className={ar.center_block} type="text" placeholder="Confirm Password" required />
                    </div>

                    <div className={ar.button}>
                        <input className={ar.center_block} type="submit" value="Register" />
                    </div>
                    
                </form>
            </div>
        </React.Fragment>
    );    
}
 