import _ from "lodash";

import {
    FETCH_COUNTRIES,
    FETCH_COUNTRY_DETAILS
} from "../actions/types";

export default (state= [], action: any) => {
    switch (action.type) {
        case FETCH_COUNTRIES:
            return action.payload;
        case FETCH_COUNTRY_DETAILS:
            return action.payload;
        default:
            return state;
    }
};