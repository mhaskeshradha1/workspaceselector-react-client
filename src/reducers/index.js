import {combineReducers} from "redux"
import errorReducer from "./errorReducers"
import ProjectReducer from "./ProjectReducer"


export default combineReducers ({
    error:errorReducer,
    project:ProjectReducer
})