
const REGISTER_USER = "REGISTER_USER";
export function registerUser (registerObj){

    return (dispatch) => {
        console.log("RegisterObj" + registerObj.firstName);
        console.log("RegisterObj" + registerObj.middleName);
        console.log("RegisterObj" + registerObj.lastName);
        console.log("RegisterObj" + registerObj.gender);
        console.log("RegisterObj" + registerObj.email);
        console.log("RegisterObj" + registerObj.preferName);

        dispatch({
            type: REGISTER_USER,
            payload: registerObj
        })
        return Promise.resolve(true)
    };
}
