import { FETCH_COUNTRY_WEATHER } from "../types";
import Worktables from "../../../api/worktables";

import { WeatherDispatchType } from "../../../helpers/ducks-types";

export const fetchWeather = (location: string) => async (dispatch: ({ type, payload }: WeatherDispatchType) => void) => {
    try {
        const response = await Worktables.post("/weather", { location: location });

        dispatch({ type: FETCH_COUNTRY_WEATHER, payload: response.data });
    } catch(error) {
        console.error("Error: ", error);
        return null;
    }
};