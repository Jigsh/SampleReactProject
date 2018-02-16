import axios from 'axios';
export const getWeather = () => {
    return dispatch => {

        axios.get("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=059a4ef02f5da18b3e4f5ba95b5452c9").then((response) => {

            dispatch({
                type: "GET_WEATHER",
                payload: response.data
            })

        })

    }

}

export const submitWeather = (weatherObj) => {

    return disptch => {
        console.log("weatherObj: " + weatherObj.city);
        _.each(weatherObj.list,function(weather){

            console.log("weatherObj: " + weather.date);
            console.log("weatherObj: " + weather.actualTemp);
            console.log("weatherObj: " + weather.expectedTemp);
        })


        disptch ( {

            type : "SUBMIT_WEATHER",
            payload : weatherObj
        })

    }
}

export const getCoOrdinate =() => {
    return dispatch => {
        const center = {
            lat : 18.5204,
            lng : 73.8567
        }
        dispatch({
            type: "GET_COORDINATE",
            payload: center
        })

    }

}

export const setChangeTmp = (changeTmp) => {
debugger
    return disptch => {

        disptch ({

            type: "SET_CHANGE_TMP",
            payload : changeTmp
        })
    }
}
