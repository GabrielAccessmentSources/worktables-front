import mondaySdk from "monday-sdk-js";
const monday = mondaySdk();

import { FETCH_COUNTRIES } from "../types";

export const fetchCountries = () => async (dispatch: any) => {
    try {
        const response = await monday.api(`query { boards { id, name, items { id, name } } }`);
        dispatch({ type: FETCH_COUNTRIES, payload: response.data });
        return response.data;
    } catch(error) {
        console.error("Error: ", error);
        return null;
    }
};