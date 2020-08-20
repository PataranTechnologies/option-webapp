const authDisplayReducer = ( state = false, action) => {
    switch(action.type){
        case "AUTH_TOGGLE": {
            return !state;
        }
        default: {
             return state;
        }
    }
}

export default authDisplayReducer;