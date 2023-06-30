import { combineReducers } from "redux";

import locationsReducer from "./countries-reducer";

export default combineReducers({
    locations: locationsReducer
});