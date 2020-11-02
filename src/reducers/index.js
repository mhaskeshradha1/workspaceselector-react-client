import {combineReducers} from "redux"
import errorReducer from "./errorReducers"
import ProjectReducer from "./ProjectReducer"
import backlogReducer from "./backlogReducer"

export default combineReducers ({
    error:errorReducer,
    project:ProjectReducer,
    backlog:backlogReducer
});