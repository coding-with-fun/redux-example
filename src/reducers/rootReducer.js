import { combineReducers } from "redux";
import cakeReducer from "./cakeReducer";
import ice_creamReducer from "./ice_creamReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: ice_creamReducer,
});

export default rootReducer;
