import React, { Component } from 'react'
import {getProject,createProject} from "../../actions/projectActions"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import classnames from "classnames"

 class UpdateProject extends Component {
constructor(){
    super()
    this.state = {
        "id":"",
        "myprojectnm": "",
        "myprojectidentifier": "",
        "description": "",
        "startdate": "",
        "enddate": "",
        //errors:{},
        "init" : false,
        
    };
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
}

static getDerivedStateFromProps(nextProps,state){
    
    const {
        id,
        myprojectnm,
    myprojectidentifier,
    description,
    startdate,
    enddate} = nextProps.project;

    if (nextProps.project.myprojectnm && 
            nextProps.project.myprojectnm !== state.myprojectnm && 
            !state.init ) {
        
        return {
            "id":id,
            "myprojectnm": myprojectnm,
            "myprojectidentifier": myprojectidentifier,
            "description": description,
            "startdate": startdate,
            "enddate": enddate,
            "init" : true,
        };
        
    } else{        
        return null;
    }
}



     componentDidMount(){
         const {id}
          = this.props.match.params;
         this.props.getProject(id, this.props.history);
     }
     onChange(e){
         this.setState({[e.target.name]:e.target.value})
     }
     onSubmit(e) {
        e.preventDefault();
        const UpdateProject = {
        "id":this.state.id,
        "myprojectnm": this.state.myprojectnm,
        "myprojectidentifier": this.state.myprojectidentifier,
        "description": this.state.description,
        "startdate": this.state.startdate,
        "enddate": this.state.enddate
        };
        this.props.createProject(UpdateProject, this.props.history);
     }
    render() {
        return (
            <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Update Task form</h5>
                    <hr />
                    <form onSubmit = {this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg " 
                              placeholder="Task Name" 
                              name="myprojectnm"
                              value = {this.state.myprojectnm}
                              onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" 
                               placeholder="Unique Task ID"
                               name="myprojectidentifier"
                               value ={this.state.myprojectidentifier}
                               onChange={this.onChange}
                                disabled />
                        </div>
                        
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" 
                             placeholder="Task Description"
                             name="description"
                             value = {this.state.description}
                             onChange={this.onChange}></textarea>
                        </div>
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" 
                            name="startdate"
                            value = {this.state.startdate}
                            onChange={this.onChange} />
                        </div>
                        <h6>Estimated End Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" 
                             name="enddate"
                             value = {this.state.enddate}
                             onChange={this.onChange} />
                        </div>

                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>

        )
        
    }
}
UpdateProject.propTypes ={
    getProject:PropTypes.func.isRequired,
    createProject:PropTypes.func.isRequired,
project:PropTypes.object.isRequired,
//errors:PropTypes.object.isRequired
};

   const mapStateToProps = state =>({
project:state.project.project,
//errors:state.errors
    })

export default connect (
   mapStateToProps,
   {getProject,createProject}) (UpdateProject);