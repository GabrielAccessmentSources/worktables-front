import React, { useMemo, useState, memo, useCallback } from "react";
import { List, ListItem } from "monday-ui-react-core";

import CustomModal from "./modal";

export const CountriesList = ( { allCountries }: any) => {
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState('');
    const [countryId, setCountryId] = useState('');


    // const filteredCountries = countries.filter((country) =>
    //     country.name.toLowerCase().includes(searchQuery.toLowerCase())
    // );


    const showModal = useCallback((country? :any) => {
            setLocation(country.name);
            setCountryId(country.id);
            setShow(true);
    }, []);

    const renderList = useMemo(() => allCountries.map((country: any) => {
        return(
            // eslint-disable-next-line react/jsx-key
            <ListItem
                id={country.id}
                onClick={() => showModal(country)}
            >
                {country.name}
            </ListItem>
        );
    }), [allCountries]);

    return (
        <div>
            {show && (
                <CustomModal
                    show={show}
                    onClose={() => setShow(false)}
                    countryId={countryId}
                    location={location}
                />
            )}
            <List>
                {renderList}
            </List>
        </div>
    );
};
