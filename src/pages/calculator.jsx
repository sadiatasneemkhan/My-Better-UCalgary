import React from "react";
import StudentDashboard from '../components/studentDashboard';
import c from '../styles/calculator.module.css'

function Calculator() {
    return (  
        <React.Fragment>
            <StudentDashboard/>

            <div className={c.course_details}>
            <div className={c.lists}>
                <h1>FINAL GRADE CALCULATOR</h1>
                <div className={c.buttons}>
                <span onclick="newElement()" className={`${c.btn} ${c.btn_outline_warning}`}>Calculate</span>
                <span onclick="newElement()" className={`${c.btn} ${c.btn_outline_warning}`}>Add</span>
                </div>

                <ol id="myUL">
                    <li >
                        Work <input placeholder="Ex. Asmt 1" className={c.work}/> Weight <input type="number"/>
                    </li>
                    <li >
                        Work <input placeholder="Ex. Asmt 2" className={c.work}/> Weight <input type="number"/>
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
