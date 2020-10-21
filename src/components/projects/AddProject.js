import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createProject} from "../../actions/projectActions";
import classnames from "classnames";

 class AddProject extends Component {
     constructor(){
         super()

         this.state={
            "myprojectnm": "",
            "myprojectidentifier": "",
            "description": "",
            "startdate": "",
            "enddate": "",
            errors:{}
         };
         this.onChange=this.onChange.bind(this);
         this.onSubmit=this.onSubmit.bind(this);
     }
     //life cycle hooks
     componentWillReceiveProps(nextProps){
         if(nextProps.errors){
             this.setState({errors:nextProps.errors})
         }

     }
     onChange(e){
         this.setState({[e.target.name]:e.target.value})
     }
     onSubmit(e){
         e.preventDefault();
         const newProject={
            "myprojectnm": this.state.myprojectnm,
            "myprojectidentifier": this.state.myprojectidentifier,
            "description": this.state.description,
            "startdate": this.state.startdate,
            "enddate": this.state.enddate
         }
         this.props.createProject(newProject, this.props.history)
     }
    render() {
        const {errors} = this.state;
        return (
            <div>
        
                <div className="projects">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create Task form</h5>
                    <hr />
    
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" 
                             className={classnames("form-control form-control-lg ",
                             {"is-invalid":errors.myprojectnm})}
                             placeholder="Task Name" 
                             name="myprojectnm"
                             value={this.state.myprojectnm}
                             onChange={this.onChange}/>
                             {errors.myprojectnm &&
                                 (<div className="invalid-feedback">{errors.myprojectnm}</div>)}
                        </div>
                        <div className="form-group">
                            <input type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Unique Task ID" 
                            name="myprojectidentifier"
                            value={this.state.myprojectidentifier}
                            onChange={this.onChange}
                                />
                                {errors.myprojectidentifier &&
                                    (<div className="invalid-feedback">{errors.myprojectidentifier}</div>)}
                        </div>
                        
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" 
                            placeholder="Task Description" 
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}>
                            </textarea>
                            {errors.description &&
                                (<div className="invalid-feedback">{errors.description}</div>)}
                        </div>
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input type="date" 
                             className="form-control form-control-lg"
                             name="startdate" 
                             value={this.state.startdate}
                             onChange={this.onChange}/>
                        </div>
                        <h6>Estimated End Date</h6>
                        <div className="form-group">
                            <input type="date" 
                             className="form-control form-control-lg"
                             name="enddate" 
                             value={this.state.enddate}
                             onChange={this.onChange}/>
                        </div>

                        <input type="submit" 
                         className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
            </div>
            
        )
    }
}
AddProject.propTypes = {createProject: PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired}


    const mapStateToProps = state => ({
        errors:state.errors
    });



export default connect(mapStateToProps, {createProject})
(AddProject);