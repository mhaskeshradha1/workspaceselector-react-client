import axios from "axios";
import {GET_ERRORS, GET_PROJECTS, GET_PROJECT} from "./types";


export const createProject = (project, history) => async dispatch => {
    try{
        const res = await axios.post("http://localhost:8080/api/project", project)
        history.push("/dashboard");
        dispatch({
            type:GET_ERRORS,
            payLoad:{}
        });
    }catch (err){
        dispatch({
            type:GET_ERRORS,
            payLoad:err.response.data
        });

    }
};
export const getProjects =() => async dispatch =>{
    const res = await axios.get("http://localhost:8080/api/project/all")
    dispatch({
        type:GET_PROJECTS,
        payLoad:res.data
    })
}
 
export const getProject = (id, history) => async dispatch =>{
    //hadles errors where if will try to fetch tasks which are not created for update and send to dashboard. 
    try{
    const res = await axios.get(`http://localhost:8080/api/project/${id}`)
    
    dispatch({
        type:GET_PROJECT,
        payLoad:res.data
    })
}catch(err){
    history.push("/dashboard")
}
}