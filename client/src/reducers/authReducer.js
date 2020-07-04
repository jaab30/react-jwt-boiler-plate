import { REGISTER_SUCCESS, LOGIN_SUCCESS } from "../actions/types";

const initialState = {
    token: null,
    isAuthenticated: false,
    currentUser: null
}

export default (state = initialState, action) => {

    switch (action.type) {
        case REGISTER_SUCCESS, LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token)
            return { ...state, token: action.payload.token, currentUser: { email: action.payload.email } };
        case "TWO":
            return state;
        default:
            return state
    }
}

