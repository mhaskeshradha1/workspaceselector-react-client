import React, { Component } from "react";
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import AddProject from './components/projects/AddProject';
import {Provider} from "react-redux"
import store from "./store" 
import UpdateProject from './components/projects/UpdateProject';
import UpdateProjectTask from "./components/ProjectBoard/ProjectTasks/UpdateProjectTask";
import ProjectBoard from "./components/ProjectBoard/ProjectBoard";
import AddProjectTask from './components/ProjectBoard/ProjectTasks/AddProjectTask';
import Landing from './components/Layout/Landing';
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import SecuredRoute from "./securityUtils/secureRoute";

//set the jwtToken in App.js because will not loose the state after refreshing the page.
//after entering login and password in login form and clicking refresh will lead to state loose
const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });
// check whether token is valis still
  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    //handle logout
    //window.location.href = "/";

    store.dispatch(logout());
    window.location.href = "/";
  }
}

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <Header />
       
          { 
            //public routes
          }

          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          { 
            //private routes
          }
          <Switch>
        <SecuredRoute exact path="/dashboard" component ={Dashboard}/>
        <SecuredRoute exact path="/addProject" component ={AddProject}/>
        <SecuredRoute exact path="/updateProject/:id" component ={UpdateProject}/>
        <SecuredRoute exact path="/projectBoard/:id" component ={ProjectBoard}/>
          <SecuredRoute exact path="/addProjectTask/:id" component={AddProjectTask} />
          <SecuredRoute exact path="/updateProjectTask/:backlog_id/:pt_id" component={UpdateProjectTask}
            />
            </Switch>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
