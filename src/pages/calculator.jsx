import React from "react";
import StudentDashboard from '../components/studentDashboard';
import c from '../styles/calculator.module.css'

function Calculator() {
    return (  
        <React.Fragment>
            <StudentDashboard/>

            <div className={ar.course-details}>
            <div className={ar.lists}>
                <h1>FINAL GRADE CALCULATOR</h1>
                <div className={ar.buttons}>
                <span onclick="newElement()" className={`${ar.btn} ${ar.btn-outline-warning}`}>Calculate</span>
                <span onclick="newElement()" className={`${ar.btn} ${ar.btn-outline-warning}`}>Add</span>
                </div>

                <ol id="myUL">
                    <li >
                        Work <input placeholder="Ex. Asmt 1" className={ar.work}/> Weight <input type="number"/>
                    </li>
                    <li >
                        Work <input placeholder="Ex. Asmt 2" className={ar.work}/> Weight <input type="number"/>
                    </li>
                    <li>
                        Final Weight <input type="number"/> Grade Wanted <input type="number"/>
                    </li>
                </ol>
            </div>
            </div>
        </React.Fragment>
    );
}

export default Calculator;
