import React, {Component} from 'react';
//import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

//import Homepage from './pages/homepage';
//import Login from './pages/login';
//import Registration from './pages/registration';
//import StudentRegistration from './pages/studentRegistration';
//import AdminRegistration from './pages/adminRegistration';
//import AdminDashboard from './components/adminDashboard';
//import StudentDashboard from './components/studentDashboard';
import ViewCourses from './pages/viewCourses';

export default function App (){

  return (
    <React.Fragment> 
      <ViewCourses/>
    </React.Fragment>
  );
}
 