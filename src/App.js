import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Homepage from './pages/homepage';
import Login from './pages/login';

export default function App (){

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/login" exact component={Login}/>
        
      </Switch>



    </Router>
  );
}
 