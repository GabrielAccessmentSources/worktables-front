import React, { useMemo, useState, useCallback } from "react";
import { List, ListItem } from "monday-ui-react-core";

import CustomModal from "./modal";
import { CountryType } from "../../helpers/types";

export const CountriesList = ( { allCountries }: { allCountries: CountryType[]}) => {
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState('');
    const [countryId, setCountryId] = useState('');

    const showModal = useCallback((country?: CountryType) => {
        if (country) {
            setLocation(country.name);
            setCountryId(country.id);
        }
        setShow(true);
    }, []);

    const renderList = useMemo(() => allCountries.map((country: CountryType) => {
        return(
            <ListItem
                key={country.id}
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
