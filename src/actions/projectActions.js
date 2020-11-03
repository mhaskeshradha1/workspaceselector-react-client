import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from "./types";



export const createProject = (project, history) => async dispatch => {
    try{
        await axios.post("/api/project", project)
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
    const res = await axios.get("/api/project/all")
    dispatch({
        type:GET_PROJECTS,
        payLoad:res.data
    })
};
 
export const getProject = (id, history) => async dispatch =>{
    //hadles errors where if will try to fetch tasks which are not created for update and send to dashboard. 
    try{
    const res = await axios.get(`/api/project/${id}`)
    
    dispatch({
        type:GET_PROJECT,
        payLoad:res.data
    })
}catch(err){
    history.push("/dashboard")
}
};
export const deleteProject = id => async dispatch =>{
    if(window.confirm(
        "Are you sure about deleting the task? It will delete all related data..")
        ){
    await axios.delete(`/api/project/${id}`);
    dispatch({
        type:DELETE_PROJECT,
        payLoad:id
    })
        }
}