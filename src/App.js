import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddProject from './components/projects/AddProject';
import {Provider} from "react-redux"
import store from "./store" 
import UpdateProject from './components/projects/UpdateProject';
import ProjectBoard from "./components/ProjectBoard/ProjectBoard";
import AddProjectTask from './components/ProjectBoard/ProjectTasks/AddProjectTask';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <Header />
       {
         //first route goes to dashboard-click dashboard- will see vreate task page
       }
        <Route exact path="/dashboard" component ={Dashboard}/>
        {
          //below route goes to add atsk form
        }
        <Route exact path="/addProject" component ={AddProject}/>
        
        <Route exact path="/updateProject/:id" component ={UpdateProject}/>
        <Route exact path="/projectBoard/:id" component ={ProjectBoard}/>
        <Route exact path="/addProjectTask/:id" component ={AddProjectTask}/>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
