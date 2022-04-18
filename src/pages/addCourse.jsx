import React, { useEffect, useState, useRef } from "react";
import AdminDashboard from "../components/adminDashboard";
import ac from "../styles/addCourse.module.css";
import axios from 'axios';
import {  useParams } from "react-router-dom";



function AddCourse() {
    let ucid;
    let i = new URLSearchParams(window.location.href.split('?')[1]);
i.forEach((para)=>{
    ucid = para;
});

  const [name, setName] = useState("");
  const [sem, setSem] = useState("");
  const [stat, setStat] = useState("");
  const [dep, setDep] = useState("")
  const [desc, setDesc] = useState("");
  const [ilName, setIlName] = useState("");
  const [ifName, setIfName] = useState("");
  const [build, setBuild] = useState("");
  const [roomNum, setRoomNum] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [enrolled, setEnrolled] = useState("");
  const [capacity, setCapacity] = useState("");
  
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
  
  async function fetcher(){
console.log("ran fetcher")
    const url = `http://localhost:5001/course/createCourse/name=${name}&semester=${sem}&dept=${dep}&First_name=${ilName}&Last_name=${ifName}&desc=${desc}&status=${stat}&building=${build}&room_num=${roomNum}&day=${day}&time=${time}&Classsize=${enrolled}&cap=${capacity}&Ucid=${ucid}`;
     const {data} = await axios.post(url); 
     console.log(data)
    if(data !== null){
        document.location.href = `${window.location.origin}/admin/?ucid=${ucid}`;
        alert(`Course: ${name} has been added.`)
    }else{
        alert(`An error has orrcurred while adding course: ${name}`);
    }

}

  const submission = (evt) => {
    evt.preventDefault();
    fetcher();
}


  return (
    <React.Fragment>
      <AdminDashboard />

      <div className={ac.course_details}>
        <h1>ADD COURSE</h1>

        <form onSubmit={submission}>
          <div className={ac.labels}>
            <label>Name and Department</label>
          </div>
          <div className={ac.textfield}>
            <input
              className={ac.center_block}
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex. CPSC 471"
              required
            />
          </div>
          <div className={ac.textfield}>
            <input
              className={ac.center_block}
              type="text"
              onChange={(e) => setDep(e.target.value)}
              placeholder="Ex. Computer Science"
              required
            />
          </div>
          <div className={ac.labels}>
            <label>Semester</label>
          </div>
          <div className={ac.textfield}>
            <input
              className={ac.center_block}
              type="text"
              placeholder="Ex. Winter 2022"
              onChange={(e) => setSem(e.target.value)}
              required
            />
          </div>

          <div className={ac.labels}>
            <label>Description and Status</label>
          </div>
          <div className={ac.textfield}>
            <input
              className={ac.center_block}
              type="text"
              placeholder="Description"
              onChange={(e) => setDesc(e.target.value)}
              required
            />
          </div>
          <div className={ac.textfield}>
            <input
              className={ac.center_block}
              type="text"
              onChange={(e) => setStat(e.target.value)}
              placeholder="ongoing/completed"
              required
            />
          </div>
          <div className={ac.labels}>
            <label>Instructor's Name</label>
          </div>
          <div className={ac.textfield}>
            <input
              className={ac.center_block}
              type="text"
              placeholder="First Name"
              onChange={(e) => setIlName(e.target.value)}
              required
            />
            <input
              className={ac.center_block}
              type="text"
              placeholder="Last Name"
              onChange={(e) => setIfName(e.target.value)}
              required
            />
          </div>

          <div className={ac.labels}>
            <label>Location</label>
          </div>
          <div className={ac.textfield}>
            <input
              className={ac.center_block}
              type="text"
              onChange={(e) => setBuild(e.target.value)}
              placeholder="Building"
              required
            />
            <input
              className={ac.center_block}
              type="text"
              onChange={(e) => setRoomNum(e.target.value)}
              placeholder="Room Number"
              required
            />
          </div>

          <div className={ac.labels}>
            <label>Day and Time</label>
          </div>
          <div className={ac.textfield}>
            <input
              className={ac.center_block}
              type="text"
              onChange={(e) => setDay(e.target.value)}
              placeholder="Ex. MWF"
              required
            />

            <input
              className={ac.center_block}
              type="text"
              onChange={(e) => setTime(e.target.value)}
              placeholder="Ex. 12:00 - 14:30"
              required
            />
          </div>

          <div className={ac.labels}>
            <label>Number of Enrolled Students</label>
          </div>
          <div className={ac.textfield}>
            <input
              className={ac.center_block}
              type="text"
              onChange={(e) => setEnrolled(e.target.value)}
              placeholder="0 - Max Capacity"
              required
            />
          </div>

          <div className={ac.labels}>
            <label>Max Capacity</label>
          </div>
          <div className={ac.textfield}>
            <input
              className={ac.center_block}
              type="text"
              onChange={(e) => setCapacity(e.target.value)}
              placeholder="Max Capacity"
              required
            />
          </div>

          <div className={ac.button}>
            <input className={ac.center_block} type="submit" value="Save" />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default AddCourse;
