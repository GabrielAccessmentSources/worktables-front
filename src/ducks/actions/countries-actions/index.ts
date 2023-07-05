import mondaySdk from "monday-sdk-js";
const monday = mondaySdk();

import { FETCH_COUNTRIES, FETCH_COUNTRY_DETAILS } from "../types";
import { ResponseDataType, ItemType, DispatchType } from "../../../helpers/ducks-types";
import { GetCountriesQuery, GetCountryDetailsQuery } from "../../../api/queries/monday-gql-queries";

export const fetchCountries = () => async (dispatch: ({ type, payload }: DispatchType) => void) => {
    try {
        // @ts-expect-error: Ignoring TypeScript error for this line
        const response: ResponseDataType = await monday.api(GetCountriesQuery);
        const items: Array<ItemType> = response.data.boards[0].items;

        // @ts-expect-error: Ignoring TypeScript error for this line
        dispatch({ type: FETCH_COUNTRIES, payload: items });
    } catch(error) {
        console.error("Error: ", error);
        return null;
    }
};

export const fetchCountryDetails = (id: string) => async (dispatch: ({ type, payload }: DispatchType) => void) => {
    try{
        const response = await monday.api(GetCountryDetailsQuery,
            { variables: { id: parseInt(id) } }
        );

        // @ts-expect-error: Ignoring TypeScript error for this line
        const countryItems: Array<ItemType> = response.data.boards[0].items;

        // @ts-expect-error: Ignoring TypeScript error for this line
        dispatch({ type: FETCH_COUNTRY_DETAILS, payload: countryItems });
    } catch (error) {
        console.error("Error: ", error);
        return null;
    }
};