import React, { useState }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { io } from "socket.io-client";
import Login from './pages/login/Login';
import HomePage from './pages/homepage/Homepage';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
    
       <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
       </Router>
     
      
    </div>
  );
}

export default App;
