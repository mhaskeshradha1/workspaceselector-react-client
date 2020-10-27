import {GET_PROJECTS,GET_PROJECT, DELETE_PROJECT} from "../actions/types"
const intialState = {
    projects:[],
    project:{}
};
export default function(state = intialState, action){
    switch(action.type){
       case GET_PROJECTS:
        return{
    ...state,
    projects:action.payLoad};

       case GET_PROJECT:
           return{
               ...state,
               project:action.payLoad
           }
           case DELETE_PROJECT:
               return{
                   ...state,
                   projects:state.projects.filter(project=>project.myprojectidentifier!==action.payLoad)
               }
        default:
            return state;
    }
}