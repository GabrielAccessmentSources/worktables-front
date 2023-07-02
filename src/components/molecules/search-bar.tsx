import React from "react";
import { Search } from "monday-ui-react-core";

export const SearchBar = () => {
    return (
        <div>
            <Search
                placeholder="Search for a Country"
                wrapperClassName="monday-storybook-search_size"
                onChange={() => console.log("here")}
            />
        </div>
    );
};