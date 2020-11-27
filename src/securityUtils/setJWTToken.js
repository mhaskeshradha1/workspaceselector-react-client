import axios from "axios"

const setJWTToken = token => {
    //handling token in authorization react side
    if (token) {
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        //dont need authorization part if token is not there
        delete axios.defaults.headers.common["Authorization"]
    }
};
export default setJWTToken;