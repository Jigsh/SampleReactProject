
const WeatherReducer = (state={},action) =>{

    switch(action.type){

        case "GET_WEATHER" :
            return Object.assign({}, state, {weather: action.payload});
        case "GET_COORDINATE" :
            return Object.assign({}, state, {coordinate: action.payload});
        case "SUBMIT_WEATHER" :
            return Object.assign({},state, {actualWeather : action.payload})
        case "SET_CHANGE_TMP" :
            return Object.assign({},state, {actualTmp : action.payload})
        default :
            return state;

    }
}

export default WeatherReducer;