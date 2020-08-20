import { combineReducers } from "redux";

import addToUsers from "./addToUsers";
import authShow from "./authShow";

const rootReducer = combineReducers({
    users: addToUsers,
    authShow: authShow
});

export default rootReducer;