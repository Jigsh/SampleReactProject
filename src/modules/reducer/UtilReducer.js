
const UtilReducer = (state={},action)  => {

    switch(action.type){

        case "SETTER" :
            return Object.assign({},state,{setterMethods : action.payload})
        case "GETTER" :
            return Object.assign({},state,{getterMethods : action.payload})
        default :
            return state;

    }

}

export default UtilReducer;