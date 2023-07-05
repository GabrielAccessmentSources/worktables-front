import {
    FETCH_COUNTRY_WEATHER
} from "../actions/types";

import { ActionType } from "../../helpers/ducks-types";

export default (state= [], action: ActionType) => {
    switch (action.type) {
        case FETCH_COUNTRY_WEATHER:
            return action.payload;
        default:
            return state;
    }
};