import mondaySdk from "monday-sdk-js";
const monday = mondaySdk();

import { FETCH_COUNTRIES, FETCH_COUNTRY_DETAILS } from "../types";
import { ResponseDataType, ItemType, DispatchType } from "../../../helpers/ducks-types";
import { GetCountriesQuery, GetCountryDetailsQuery } from "../../../api/queries/queries";

export const fetchCountries = () => async (dispatch: ({ type, payload }: DispatchType) => void) => {
    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const response: ResponseDataType = await monday.api(GetCountriesQuery);
        const items: Array<ItemType> = response.data.boards[0].items;

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
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

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const countryItems: Array<ItemType> = response.data.boards[0].items;

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch({ type: FETCH_COUNTRY_DETAILS, payload: countryItems });
    } catch (error) {
        console.error("Error: ", error);
        return null;
    }
};