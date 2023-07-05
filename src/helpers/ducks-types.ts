export type ItemType = {
    id: string;
    name: string;
}

export type BoardType = {
    id: string;
    name: string;
    items: Array<ItemType>;
}

export type ResponseDataType = {
    data: {
        boards: {
            id: string;
            name: string;
            items: {
                id: string;
                name: string;
                column_values: {
                    id: string;
                    value: string;
                    title: string;
                    text: string;
                }[];
            }[];
        }[];
    };
};

export type DispatchType = {
    type: string;
    payload: {
        items: ItemType
    };
};

export type WeatherDispatchType = {
    type: string,
    payload: {
        response: {
            data: {
                posts: [] | null,
            }
        }
    }
}

export type ActionType = {
    type: string;
    payload: { _id: string }
}