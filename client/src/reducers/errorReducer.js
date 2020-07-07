import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const initialState = {
    message: ""
};
// reducer to handle error Actions
export default (state = initialState, action) => {

    switch (action.type) {
        case GET_ERRORS:
            return {
                ...state,
                message: action.payload.message
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                message: ""
            };
        default:
            return state
    };
};