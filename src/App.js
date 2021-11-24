import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import FeaturedInfo from "./components/FeaturedInfo/FeaturedInfo";
import "./App.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Userlist from "./Pages/UserList/Userlist";
import Report from "./Pages/Report/report";
import Project from "./Pages/projects/Project";
import Payment from "./Pages/Payment/Payment";
import Action from "./Pages/Action/action";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="home">
          <Switch>
            <Route exact path="/">
              <FeaturedInfo/>
              <Userlist/>
            </Route>

            <Route path="/Project">
              <Project/>
            </Route>

            <Route path="/Users">
              <Userlist/> 
            </Route>
            
            <Route path="/Report">
              <Report/> 
            </Route>

            <Route path="/Payment">
              <Payment/>
            </Route>
            
            <Route path="/Action">
              <Action/>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
} 
 
export default App;








/* <Route path="/User/:userId">
  <Report/>
</Route>

<Route path="/Project/:userId">
  <Project/>
</Route> */