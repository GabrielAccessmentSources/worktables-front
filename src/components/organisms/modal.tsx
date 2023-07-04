import React, { useEffect, useState, useMemo } from "react";
import { Modal, ModalContent, Loader, Text, Flex, Title } from "monday-ui-react-core";
import { connect } from "react-redux";
import "monday-ui-react-core/tokens";

import { fetchCountryDetails } from "../../ducks/actions/countries-actions";
import { fetchWeather } from "../../ducks/actions/weather-actions";

const CustomModal = (state: any) => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(true);
        state.fetchCountryDetails(state.countryId);
        state.fetchWeather(state.location);
        setLoader(false);
    }, []);

    const renderCountryDetails = useMemo(() => {
        const findCountryData = state?.country[2]?.map((countryDetail: any) => {
           return(
               <Flex direction={Flex.directions.COLUMN} justify={Flex.justify.START} align={Flex.align.START} key={countryDetail.id}>
                   <Title type={"h3"} weight="bold">{countryDetail.title}</Title>
                   <Text align={"center"}>{countryDetail.text}</Text>
               </Flex>
           ); 
        });

        const weatherData = state?.weather?.current;
        return(
            <>
                <div>
                    {findCountryData}
                </div>
                <Flex direction={Flex.directions.COLUMN} justify={Flex.justify.START} align={Flex.align.START}>
                    <Title type={"h3"} weight="bold">Condition</Title>
                    <Text>{weatherData?.condition?.text}</Text>

                    <Title type={"h3"} weight="bold" >Feels Like °C</Title>
                    <Text align={"center"}>{weatherData?.feelslike_c} °c</Text>

                    <Title type={"h3"} weight="bold">Feels Like °F</Title>
                    <Text align={"center"}>{weatherData?.feelslike_f} °c</Text>

                    <Title type={"h3"} weight="bold">Temperature °C</Title>
                    <Text align={"center"}>{weatherData?.temp_c} °c</Text>

                    <Title type={"h3"} weight="bold">Temperature °F</Title>
                    <Text align={"center"}>{weatherData?.temp_f} °f</Text>

                    <Title type={"h3"} weight="bold">Humidity</Title>
                    <Text align={"center"}>{weatherData?.humidity}</Text>

                    <Title type={"h3"} weight="bold">Wind Km</Title>
                    <Text align={"center"}>{weatherData?.wind_kph}</Text>

                    <Title type={"h3"} weight="bold">Last Updated At</Title>
                    <Text align={"center"}>{weatherData?.last_updated}</Text>
                </Flex>
            </>
        );
    }, [state.country, state.weather]);

    return(
        <Modal
            id="story-book-modal"
            width={Modal.width.FULL_WIDTH}
            data-testid={""}
            show={state.show}
            title={state.location}
            onClose={() => state.onClose()}
        >
            {loader ? (
                <Loader size={40}/>
            ) : (
                <ModalContent>
                    {renderCountryDetails}
                </ModalContent>
            )}
        </Modal>
    );
};

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        country: Object.values(state.countries[ownProps.countryId]),
        weather: state.weather
    };
};

export default connect(
    mapStateToProps,
    { fetchCountryDetails, fetchWeather }
)(CustomModal);
