import { combineReducers } from "redux";

import countriesReducer from "./countries-reducer";
import weatherReducer from "./weather-reducer";

export default combineReducers({
    countries: countriesReducer,
    weather: weatherReducer,
});