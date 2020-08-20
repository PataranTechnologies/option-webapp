import {users} from "../../util/users";

const cartReducer = ( state = users, action ) => {
    switch(action.type){
        case "ADD": {
            return [...state, action.payload];
        }

        default: {
            return state;
        }
    }
}

export default cartReducer;