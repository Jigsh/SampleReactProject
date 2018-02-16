import axios from 'axios';

export const login = (userName,password) => {

    return dispatch => {
        if(userName == 'h123' && password == '123') {
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: true
            });
            localStorage.setItem('login_user_name', userName);
            // dispatch({
            //     type: "SHOW_ALERT",
            //     payload: "login success"
            // });
            dispatch({
                type: "SAVE_USER_DETAIL",
                payload: userName
            });
            const isLogin = true;
            return Promise.resolve(isLogin);

        } else {
            dispatch({
                type: "SHOW_ALERT",
                payload: "User name or Password incorrect"
            });
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: false
            });
        }
    }
}
export const  hideAlertBox = () => {
    return dispatch => {
        dispatch({
            type: "HIDE_ALERT",
            payload: true
        })
    }
}
export const  showNavBar = () => {
    return dispatch => {
        dispatch({
            type: "SHOW_NAVBAR",
            payload: true
        })
    }
}

export const saveUserDetail = (userName) => {
    return dispatch => {
        dispatch({
            type: "SAVE_USER_DETAIL",
            payload: userName
        })
    }
}
export const userLogout = () => {
    return dispatch => {
        localStorage.clear();
        dispatch({
            type: "USER_LOGOUT",
            payload: true
        })
    }
}

export const navigateToUrl = (url) => {
    history.go(url);
}