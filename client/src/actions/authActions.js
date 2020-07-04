import API from "../utils/API";
import { REGISTER_SUCCESS, LOGIN_SUCCESS } from "./types";
import history from "../history";


export const registerUser = (data) => async dispatch => {
    try {
        const response = await API.register(data);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        });
        history.push("/pageone");

    } catch (err) {
        throw err
    }
}
export const loginUser = (data) => async dispatch => {
    try {
        const response = await API.login(data);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        });
        history.push("/pageone");

    } catch (err) {
        throw err
    }
}