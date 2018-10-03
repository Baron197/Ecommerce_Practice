import axios from 'axios';
import { API_URL_1 } from '../supports/api-url/apiurl';

export const onLogin = (user) => {
    return(dispatch) => {
        axios.post(API_URL_1 + '/login', {
            email: user.email,
            password: user.password
        }).then(user => {
            dispatch({
                type: "USER_LOGIN_SUCCESS", 
                payload: { id: user.data[0]._id, username: user.data[0].username, email: user.data[0].email, error: "" }
            });
            dispatch({
                type: "COOKIES_CHECKED"
            });
        }).catch(err => {
            console.log(err);
            dispatch({
                type: "USER_LOGIN_FAIL"
            });
        })
    }
};

export const keepLogin = (email) => {
    return(dispatch) => {
        axios.post(API_URL_1 + '/keeplogin', {
            email
        }).then(user => {
            dispatch({
                type: "USER_LOGIN_SUCCESS", 
                payload: { id: user.data[0]._id, username: user.data[0].username, email: user.data[0].email, error: "" }
            });
            dispatch({
                type: "COOKIES_CHECKED"
            });
        }).catch(err => {
            console.log(err);
            dispatch({
                type: "USER_LOGIN_FAIL"
            });
        })
    }
};

export const onLogout = () => {
    return {
        type: "USER_LOGOUT"
    };
}

export const cookieChecked = () => {
    return {
        type: "COOKIES_CHECKED"
    };
}

export const onRegister = (user) => {
    return (dispatch) => {
        axios.post(API_URL_1 + '/register', user)
        .then((res) => {
            console.log(res);
            dispatch({
                type: "USER_LOGIN_SUCCESS", 
                payload: { id: res.data.userdata._id, username: res.data.userdata.username, email: res.data.userdata.email, error: "" }
            });
            dispatch({
                type: "COOKIES_CHECKED"
            });
        })
        .catch((err) => {
            console.log(err);
        })
    }
}