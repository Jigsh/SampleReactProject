import axios from 'axios'

const REGISTER_USER = "REGISTER_USER";
export function registerUser (registerObj){
    return (dispatch) => {
        console.log("RegisterObj" + registerObj.firstName);

        dispatch({
            type: REGISTER_USER,
           payload: registerObj
        })
        return Promise.resolve(true)
    };
}

