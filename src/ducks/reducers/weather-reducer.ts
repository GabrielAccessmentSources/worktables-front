import {
    FETCH_COUNTRY_WEATHER
} from "../actions/types";

export default (state= [], action: any) => {
    switch (action.type) {
        case FETCH_COUNTRY_WEATHER:
            return action.payload;
        default:
            return state;
    }
};