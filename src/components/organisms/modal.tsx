import React, { useEffect, useState, useMemo } from "react";
import { Modal, ModalContent, Loader } from "monday-ui-react-core";
import { connect } from "react-redux";
import "monday-ui-react-core/tokens";

import { fetchCountryDetails } from "../../ducks/actions/countries-actions";
import { fetchWeather } from "../../ducks/actions/weather-actions";

const CustomModal = (props: any) => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if (props.show) {
            setLoader(true);
            props.fetchCountryDetails(props.countryId).then(() => {
                setLoader(false);
            });
        }
    }, [props.show]);

    console.log(props);

    // useEffect(() => {
    //     let isMounted = true;
    //
    //     const fetchData = async () => {
    //         await props.fetchCountryDetails();
    //         await props.fetchWeather(props.location);
    //
    //         if (isMounted) {
    //             setLoader(false);
    //         }
    //     };
    //
    //     fetchData();
    //
    //     return () => {
    //         isMounted = false;
    //     };
    // }, []);


    return(
        <Modal
            id="story-book-modal"
            width={Modal.width.FULL_WIDTH}
            data-testid={""}
            show={props.show}
            title={props.location}
            onClose={() => props.onClose()}
        >
            {loader ? (
                <Loader size={40}/>
            ) : (
                <ModalContent>
                    <p>
                        Modal content goes here
                    </p>
                </ModalContent>
            )}
        </Modal>
    );
};

const mapStateToProps = (state: any) => {
    return { countryDetails: state };
};
export default connect(
    mapStateToProps,
    { fetchCountryDetails }
    // { fetchCountryDetails, fetchWeather }
)(CustomModal);