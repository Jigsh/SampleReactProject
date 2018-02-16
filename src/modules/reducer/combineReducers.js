

import WeatherReducer from "./WeatherReducer";
import {combineReducers} from "redux";
import LoginReducer from "./LoginReducer";
import registerReducer from "./registerReducer";
import UtilReducer from "./UtilReducer"
let combineReducer = combineReducers({
    login:LoginReducer,
    register:registerReducer,
    weather:WeatherReducer,
    setterMethods : UtilReducer,
    getterMethods : UtilReducer,
})

export default combineReducer;