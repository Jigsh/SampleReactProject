import * as register from '../actions/register.js'


const initialState = {

    user : {
        firstName : "Jignesh",
        lastName : "Tandel"
    }
}


const reducer = (state = initialState , action)=> {
    debugger
    console.log(action.type);
    switch(action.type){

        case "REGISTER_USER" :
            return Object.assign({},state,{user : action.payload})
            break;
        default:
            return state;
            break;
    }
}

export default reducer;