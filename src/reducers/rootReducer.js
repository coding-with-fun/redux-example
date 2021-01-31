import { combineReducers } from "redux";
import cakeReducer from "./cakeReducer";
import ice_creamReducer from "./ice_creamReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: ice_creamReducer,
    user: userReducer,
});

export default rootReducer;
