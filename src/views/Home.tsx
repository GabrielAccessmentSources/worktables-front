import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "monday-ui-react-core/tokens";
import { Search } from "monday-ui-react-core";

import { fetchCountries } from "../ducks/actions/countries-actions";
import { SearchBar } from "../components/molecules/search-bar";
import { CountriesList } from "../components/organisms/countries-list";
import { HomeStateType, CountryType } from "../helpers/types";

const Home = (state: HomeStateType) => {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        state.fetchCountries();
    }, []);

    const filteredCountries = Object.values(state.countries).filter(
        (country: CountryType) => {
            return country?.name?.includes(searchQuery);
        }
    );
    const countriesToShow = searchQuery ? filteredCountries : Object.values(state.countries);


    return (
        <div>
            <div>
                <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            </div>
            <div>
                <CountriesList
                    allCountries={countriesToShow}
                />
            </div>
        </div>
    );
};


const mapStateToProps = (state: HomeStateType) => {
    return { countries: Object.values(state.countries) };
};
export default connect(
    mapStateToProps,
    { fetchCountries }
)(Home);
