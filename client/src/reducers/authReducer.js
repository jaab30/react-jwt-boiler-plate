

const initialState = {
    token: null,
    isAuthenticated: false,
    currentUser: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case "TEST1":
            return state;
        case "TWO":
            return state;
        default:
            return state
    }
}

