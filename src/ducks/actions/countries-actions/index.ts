import mondaySdk from "monday-sdk-js";
const monday = mondaySdk();

import { FETCH_COUNTRIES, FETCH_COUNTRY_DETAILS } from "../types";

interface Board {
    id: string;
    name: string;
    items: Array<Item>;
}

interface Item {
    id: string;
    name: string;
}

interface ResponseData {
    data: {
        boards: Array<Board>;
    };
}

export const fetchCountries = () => async (dispatch: any) => {
    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const response: ResponseData = await monday.api(`
                query { 
                    boards { 
                        id, 
                        name, 
                        items { 
                            id, 
                            name,
                        }
                    } 
                }`
        );
        const items: Array<Item> = response.data.boards[0].items;

        dispatch({ type: FETCH_COUNTRIES, payload: items });
    } catch(error) {
        console.error("Error: ", error);
        return null;
    }
};

export const fetchCountryDetails = ( id: string ) => async (dispatch: any) => {
    try{
        console.log("here");
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const response: ResponseData = await monday.api(`
                query { 
                    boards { 
                        id, 
                        name, 
                        items { 
                            id, 
                            name,
                            column_values {
                                id,
                                value
                            }
                        }
                    } 
                }`
        );

        const items: Array<Item> = response.data.boards[0].items;

        dispatch({ type: FETCH_COUNTRY_DETAILS, payload: items });
    } catch (error) {
        console.error("Error: ", error);
        return null;
    }
};