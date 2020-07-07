import API from "../utils/API";
import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    LOGIN_FAIL,
    AUTH_ERROR,
    USER_LOADED,
    GET_ERRORS,
    CLEAR_ERRORS
} from "./types";
import history from "../history";

// action to handle errors
export const getErrors = (errorData) => {
    return {
        type: GET_ERRORS,
        payload: errorData
    }
}
// Action to clear errors
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}
// Action to register new users
export const registerUser = (data) => async dispatch => {
    try {
        // send request to server side to register user
        const response = await API.register(data);
        // dispatch to reducer
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        });
        // redirect to page
        history.push("/pageone");

    } catch (err) {
        // dispatch get error Action
        dispatch(getErrors(err.response.data))
        // dispatch register fail
        dispatch({
            type: REGISTER_FAIL
        });
    };
};
// Action to login users
export const loginUser = (data) => async dispatch => {
    try {
        // send request to server side to login user
        const response = await API.login(data);
        // dispatch to reducer
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        });
        // redirect to page
        history.push("/pageone");

    } catch (err) {
        // dispatch get error Action
        dispatch(getErrors(err.response.data))
        // dispatch login fail
        dispatch({
            type: LOGIN_FAIL
        });
    }
}
// Action to load current user
export const loadUser = () => async (dispatch, getState) => {

    try {
        // call getTokenImfo funtion and store content (geader information) to headers
        const headers = getTokenInfo(getState);
        // send request to server side and pass token information in headers to verify token
        const user = await API.loadUser(headers);
        // dispatch to reducer
        dispatch({
            type: USER_LOADED,
            payload: user.data
        })

    } catch (err) {
        // dispatch Auth error
        dispatch({
            type: AUTH_ERROR
        })
    }
}

// function to configure token to be used on any server request using the server side "auth" middleware
export const getTokenInfo = getState => {

    const token = getState().auth.token;
    const headerConfig = {
        headers: {
            "Content-type": "application/json"
        }
    }
    if (token) {
        headerConfig.headers["token"] = token
    }

    return headerConfig
}
// Action to logout user
export const LogoutUser = () => {
    // redirect to page
    history.push("/");
    // dispatch logout success
    return {
        type: LOGOUT_SUCCESS
    }
}