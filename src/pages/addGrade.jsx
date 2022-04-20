import React, { useState, useEffect, useRef } from "react";
import AdminDashboard from "../components/adminDashboard";
import ag from "../styles/addGrade.module.css";
import axios from "axios";


function AddGrade() {
  let ucid;
  let i = new URLSearchParams(window.location.href.split("?")[1]);
  i.forEach((para) => {
    ucid = para;
  });
  const [Name, setName] = useState("");
  const [sem, setSem] = useState("");
  const [lgrade, setLgrade] = useState("");
  const [pgrade, setPgrade] = useState("");
    const [Sid, setSid] = useState("");

  const useDidMountEffect = (fetcher) => {
    const didMount = useRef(false);

    useEffect(() => {
      if (didMount.current) fetcher();
      else {
        didMount.current = true;
      }
    }, []);
  };

  async function fetcher() {
    console.log("ran fetcher");

    let post = {
      Course_name: Name,
      Seme: sem,
      Adminid: ucid,
      Sid: Sid,
      Lgrade: lgrade,
      Pgrade: pgrade,
    };
    const url = `http://localhost:5001/course/createCourse`;
    var bool = Boolean(Name.length < 10 && sem.length < 255 );
    
    if (bool) {
      const { data } = await axios.post(url, null, {
        params: post,
      });
    }

      //await axios.post(url,qs.stringify(post));
      
  }

  const submission = (evt) => {
    evt.preventDefault();
    fetcher();
  };

  return (
    <React.Fragment>
      <AdminDashboard />

      <div className={ag.grade_details}>
        <h1>ADD GRADE</h1>

        <form method="post">
          <div className={ag.labels}>
            <label>Student's UCID</label>
          </div>
          <div className={ag.textfield}>
            <input
              className={ag.center_block}
              type="text"
              placeholder="UCID"
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div className={ag.labels}>
            <label>Course Name</label>
          </div>
          <div className={ag.textfield}>
            <input
              className={ag.center_block}
              type="text"
              placeholder="Ex. CPSC 471"
              onChange={e => setSem(e.target.value)}
              required
            />
          </div>

          <div className={ag.labels}>
            <label>Course Semester</label>
          </div>
          <div className={ag.textfield}>
            <input
              className={ag.center_block}
              type="text"
              placeholder="Ex. Winter 2022"
              required
            />
          </div>

          <div className={ag.labels}>
            <label>Percentage Grade (%)</label>
          </div>
          <div className={ag.textfield}>
            <input
              className={ag.center_block}
              type="text"
              placeholder="Ex. 97"
              required
            />
          </div>

          <div className={ag.labels}>
            <label>Letter Grade</label>
          </div>
          <div className={ag.textfield}>
            <input
              className={ag.center_block}
              type="text"
              placeholder="Ex. A+"
              required
            />
          </div>

          <div className={ag.button}>
            <input className={ag.center_block} type="submit" value="Save" />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default AddGrade;
