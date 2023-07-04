import _ from "lodash";

import {
    FETCH_COUNTRIES,
    FETCH_COUNTRY_DETAILS
} from "../actions/types";

export default (state= [], action: any) => {
    switch (action.type) {
        case FETCH_COUNTRIES:
            return { ..._.mapKeys(action.payload, 'id') };
        case FETCH_COUNTRY_DETAILS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        default:
            return state;
    }
};