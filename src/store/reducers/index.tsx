import { combineReducers } from "redux";
import { initReducer } from "./initReducer";

export const reducers = combineReducers({
    init: initReducer,
});
