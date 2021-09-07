import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import "./App.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Userlist from "./Pages/UserList/Userlist";
import User from "./Pages/Edituser/editUser";
import NewUser from "./Pages/newUser/NewUser";
import Project from "./Pages/projects/Project";


function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="home">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/Users">
              <Userlist/> 
            </Route>
            
            <Route path="/User/:userId">
              <User/>
            </Route>
            
            <Route path="/Project/:userId">
              <Project />
            </Route>
            
            <Route path="/newUser">
              <NewUser /> 
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
} 
 
export default App;
