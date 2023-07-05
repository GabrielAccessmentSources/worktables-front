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
        url: string
    },
    staticContext: undefined
}