import React, { useEffect, useMemo } from "react";
import { Modal, ModalContent } from "monday-ui-react-core";
import { connect } from "react-redux";

import { fetchCountryDetails } from "../../ducks/actions/countries-actions";

const CustomModal = (props: any) => {
    useEffect(() => {
        props.fetchCountryDetails();
    }, []);

    return(
            <Modal
                data-testid={""}
                show={props.show}
                title="Modal title"
                onClose={() => props.onClose()}
            >
                <ModalContent>
                    <p>
                        Modal content goes here
                    </p>
                </ModalContent>
            </Modal>
    );
};

const mapStateToProps = (state: any) => {
    return { countryDetails: state };
};
export default connect(
    mapStateToProps,
    { fetchCountryDetails }
)(CustomModal);