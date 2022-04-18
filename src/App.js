import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import PageNotFound from './pages/pageNotFound';
import Homepage from './pages/homepage';
import Login from './pages/login';
import Registration from './pages/registration';
import StudentRegistration from './pages/studentRegistration';
import AdminRegistration from './pages/adminRegistration';
import AdminDashboard from './components/adminDashboard';
import StudentDashboard from './components/studentDashboard';
import ViewCourses from './pages/viewCourses';
import UpdateCourse from './pages/updateCourse';
import AddCourse from './pages/addCourse';
import EditCourse from './pages/editCourse';
import RemoveCourse from './pages/removeCourse';
import ViewGrade from './pages/viewGrade';
import AddGrade from './pages/addGrade';
import Transcript from './pages/transcript';
import Calculator from './pages/calculator';
import EnrollCourse from './pages/enrollCourse';
import DropCourse from './pages/dropCourse';
import DegreeTracker from './pages/degreeTracker';

export default function App (){

  return (
    <Router basename=''>
      <Switch>
        <Route path="/" exact component={Homepage}/>

        <Route path="/login" exact component={Login}/>
        <Route path="/registration" exact component={Registration}/>

        <Route path="/studentRegistration" exact component={StudentRegistration}/>
        <Route path="/adminRegistration" exact component={AdminRegistration}/>
        
        <Route path="/admin" exact component={AdminDashboard}/>

        <Route path="/admin/viewCourse" exact component={ViewCourses}/>
        <Route path="/admin/updateCourse" exact component={UpdateCourse}/>
        <Route path="/admin/addCourse" exact component={AddCourse}/>
        <Route path="/admin/editCourse" exact component={EditCourse}/>
        <Route path="/admin/removeCourse" exact component={RemoveCourse}/>
        <Route path="/admin/viewGrade" exact component={ViewGrade}/>
        <Route path="/admin/addGrade" exact component={AddGrade}/>
        
        <Route path="/student" exact component={StudentDashboard}/>

        <Route path="/student/transcript" exact component={Transcript}/>
        <Route path="/student/calculator" exact component={Calculator}/>
        <Route path="/student/enrollCourse" exact component={EnrollCourse}/>
        <Route path="/student/dropCourse" exact component={DropCourse}/>
        <Route path="/student/degreeTracker" exact component={DegreeTracker}/>

        <Route path="*" exact component={PageNotFound}/>
      </Switch>



    </Router>
  );
}
 