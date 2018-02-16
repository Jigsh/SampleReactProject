
let value = []

export const setValue = (value,index) => {
value = value;
    return dispatch => {

        dispatch({

            type : "SETTER",
            payload : value
        })
    }
}

export const getValue = () => {

    return dispatch => {

        dispatch({

            type : "GETTER",
            payload : value
        })
    }
}