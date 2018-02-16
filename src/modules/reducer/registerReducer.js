

const initialState = {

    user : {
        firstName : "Jignesh",
        lastName : "Tandel"
    }
}


const registerReducer = (state = {},action)=> {

    console.log(action.type);
    switch(action.type){

        case "REGISTER_USER" :
            debugger;
            return Object.assign({},state,{user : action.payload})
            break;
        default:
            return state;
            break;
    }
}


export default registerReducer;