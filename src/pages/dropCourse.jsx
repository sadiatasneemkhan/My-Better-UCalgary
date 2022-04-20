import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import StudentDashboard from "../components/studentDashboard";
import dc from "../styles/dropCourse.module.css";

function DropCourse() {
  const [name, setName] = useState("");
  const [sem, setSem] = useState("");

  let UCID;
  let i = new URLSearchParams(window.location.href.split("?")[1]);
  i.forEach((para) => {
    UCID = para;
  });

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
    var del = {
      Course_name: name,
      Semester: sem,
      Sucid: UCID,
    };
    console.log(del);
    const url = `http://localhost:5001/schedule/drop`;
    const {data} = await axios.delete(url, {
      data: del,
    });
    console.log(data);
    document.location.href = `${window.location.origin}/student/?UCID=${del.Id}`;
    alert(`Course: ${del.name} has been dropped.`);
  }

  const submission = (evt) => {
    evt.preventDefault();
    fetcher();
  };

  return (
    <React.Fragment>
      <StudentDashboard />

      <div className={dc.course_details}>
        <h1>DROP COURSE</h1>

        <form onSubmit={submission}>
          <div className={dc.labels}>
            <label>Choose the course you wish to drop:</label>
          </div>
          <div className={dc.textfield}>
            <input
              className={dc.center_block}
              type="text"
              placeholder="Ex. CPSC 471"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={dc.textfield}>
            <input
              className={dc.center_block}
              type="text"
              placeholder="Ex. Fall 2022"
              onChange={(e) => setSem(e.target.value)}
              required
            />
          </div>

          <div className={dc.button}>
            <input className={dc.center_block} type="submit" value="Save" />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default DropCourse;
