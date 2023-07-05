export type CountryType = {
    id: string;
    name: string;
    value: string
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
    feelslike_f: number | any;
    humidity: string;
    last_updated: string;
    temp_c: number | any;
    temp_f: number | any;
    wind_kph: string;
}

type CountryData =  {
    country: [string, string, Array<CountryAttribute>];
    [key: string]: any;
}

export type CountryAttribute = {
    id: string;
    value: string;
    title: string;
    text: string;
}

export type WeatherLocationType = {
    country: string;
    lat: number;
    localtime: string;
    localtime_epoch: number;
    lon: number;
    name: string;
    region: string;
    tz_id: string;
}

export type ModalStateType = {
    fetchCountryDetails: (countryId: string) => void;
    fetchWeather: (location: string) => void;
    location: string;
    countryId: string;
    // This is the correct type, but redux is annoying about this
    // country: CountryData[] ;
    country: any;
    countries?: CountryData | undefined;
    weather: {
        current: WeatherDataType;
        location: WeatherLocationType
    };
    show: boolean;
    onClose: () => void;
}

export type OwnPropsType = {
    countryId: string;
}