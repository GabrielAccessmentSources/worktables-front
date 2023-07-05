import React from "react";
import { Search } from "monday-ui-react-core";

export const SearchBar = ({ searchQuery, setSearchQuery }: any) => {
    const handleInputChange = (event: any) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            {searchQuery !== undefined && (
                <input
                    placeholder="Search for a Country"
                    // wrapperClassName="monday-storybook-search_size"
                    value={searchQuery}
                    onChange={handleInputChange}
                />
            )}
        </div>
    );
};