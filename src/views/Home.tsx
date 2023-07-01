import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchCountries } from "../ducks/actions/countries-actions";

const Home = (state: any) => {
    useEffect(() => {
        state.fetchCountries();
    }, []);

    return (
        <div>
            <h1>Hey There</h1>
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
