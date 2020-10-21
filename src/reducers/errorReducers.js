import {GET_ERRORS} from "../actions/types"

const initialState = {test:"error"};
export default function(state=initialState,action){
    switch(action.type){
        case GET_ERRORS:
        return action.payLoad;
        default:
            return state;
    }
}
