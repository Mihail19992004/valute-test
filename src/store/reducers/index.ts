import {combineReducers} from "redux";
import {ratesReducer} from "./ratesReducer";

export const rootReducer = combineReducers({
    rates: ratesReducer
})