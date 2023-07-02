import React, { useEffect } from "react";
import { connect } from "react-redux";
import "monday-ui-react-core/tokens";

import { fetchCountries } from "../ducks/actions/countries-actions";
import { SearchBar } from "../components/molecules/search-bar";
import CountriesList from "../components/organisms/countries-list";

const Home = (state: any) => {
    useEffect(() => {
        state.fetchCountries();
    }, []);

    return (
        <div>
            <div>
                <SearchBar/>
            </div>
            <div>
                <CountriesList
                    allCountries={state.countries}
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return { countries: state.countries };
};

export default connect(
    mapStateToProps,
    { fetchCountries }
)(Home);
