import React, { useMemo, useState } from "react";
import { List, ListItem } from "monday-ui-react-core";

import CustomModal from "./modal";

const CountriesList = ( { allCountries }: any) => {
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState('');
    const [countryId, setCountryId] = useState('');

    const showModal = (country?: any) => {
        setLocation(country.name);
        setCountryId(country.id);
        setShow(true);
    };


    const renderList = useMemo(() => allCountries.map((country: any) => {
        return(
            // eslint-disable-next-line react/jsx-key
            <li>
                <ListItem
                    id={country.id}
                    onClick={() => showModal(country)}
                >
                    {country.name}
                </ListItem>
            </li>
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
                    fetchCountryDetails={function (): void {
                    throw new Error("Function not implemented.");
                }}/>
            )}
            <List>
                {renderList}
            </List>
        </div>
    );
};

export default CountriesList;