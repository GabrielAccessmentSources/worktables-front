export type CountryType = {
    id: string;
    name: string;
}

type ParamsType = {
    [key: string]: string;
};

export type HomeStateType = {
    countries: CountryType[];
    fetchCountries: () => void;
    location: {
        hash: string;
        pathname: string;
        search: string;
        state: undefined;
    },
    match: {
        isExact: boolean;
        params: ParamsType;
        path: string;
        url: string;
    },
    staticContext: undefined
}

export type WeatherDataType = {
    condition: {
        text: string;
        icon: string;
        code: number;
    };
    feelslike_c: number | any;
    feelslike_f: number;
    gust_kph: number;
    gust_mph: number;
    humidity: number;
    is_day: number;
    last_updated: string;
    last_updated_epoch: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
}

export type ModalStateType = {
    countries: any;
    weather: any;
}

export type OwnPropsType = {
    countryId: string;
}
