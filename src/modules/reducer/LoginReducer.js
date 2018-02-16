

let initialState = {}
const  Loginreducer = (state = initialState,action) => {
    switch(action.type) {
        case "LOGIN_SUCCESS" :
            return Object.assign({}, state, {loginSuccess: action.payload});
        case "SHOW_ALERT" :
            return Object.assign({}, stLoginreducerate, {alertMessage: action.payload, showAlert:true});
        case "HIDE_ALERT" :
            return Object.assign({}, state, {alertMessage: "", showAlert:false});
        case "SHOW_NAVBAR" :
            return Object.assign({}, state, {showNavbar: true});
        case "SAVE_USER_DETAIL" :
            return Object.assign({}, state, {userName: action.payload});
        case "USER_LOGOUT" :
            return state={};
    }
    return state;
}

export default Loginreducer;