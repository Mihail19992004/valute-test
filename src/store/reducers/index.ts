import {combineReducers} from "redux";
import {ratesReducer} from "./ratesReducer";
import {fullNameCitiesReducer} from "./fullNameCitiesReducer";
import {countryCodeReducer} from "./countryCodeReducer";


export const rootReducer = combineReducers({
    rates: ratesReducer,
    fullNames: fullNameCitiesReducer,
    countryCode: countryCodeReducer,
})