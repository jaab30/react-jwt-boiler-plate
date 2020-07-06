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


export const getErrors = (errorData) => {
    return {
        type: GET_ERRORS,
        payload: errorData
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}


export const registerUser = (data) => async dispatch => {
    try {
        const response = await API.register(data);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        });
        history.push("/pageone");

    } catch (err) {
        dispatch(getErrors(err.response.data))
        dispatch({
            type: REGISTER_FAIL
        });
    };
};

export const loginUser = (data) => async dispatch => {
    try {
        const response = await API.login(data);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        });
        history.push("/pageone");

    } catch (err) {
        dispatch(getErrors(err.response.data))
        dispatch({
            type: LOGIN_FAIL
        });
    }
}

export const loadUser = () => async (dispatch, getState) => {

    try {
        const headers = getTokenInfo(getState);
        const user = await API.loadUser(headers);

        dispatch({
            type: USER_LOADED,
            payload: user.data
        })

    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

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

export const LogoutUser = () => {
    history.push("/");
    return {
        type: LOGOUT_SUCCESS
    }

}