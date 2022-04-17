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

export default function App (){

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage}/>

        <Route path="/login" exact component={Login}/>
        <Route path="/registration" exact component={Registration}/>

        <Route path="/studentRegistration" exact component={StudentRegistration}/>
        <Route path="/adminRegistration" exact component={AdminRegistration}/>
        
        <Route path="/studentDashboard" exact component={StudentDashboard}/>
        <Route path="/adminDashboard" exact component={AdminDashboard}/>

        <Route path="*" exact component={PageNotFound}/>
      </Switch>



    </Router>
  );
}
 