

export default (state = 0, action) => {
    switch (action.type) {
        case "TEST1":
            return state;
        case "TWO":
            return state;
        default:
            return state
    }
}

