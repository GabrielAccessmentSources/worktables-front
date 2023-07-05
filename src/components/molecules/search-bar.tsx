import React, { ChangeEvent } from "react";

// The Search didnt worked well with onChange and value, so I changed to
// standard html input because I wanted to search while typing not send an event.
import { Search } from "monday-ui-react-core";

export const SearchBar = ({ searchQuery, setSearchQuery }: {
    searchQuery: string,
    setSearchQuery: (event: string) => void
}) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value || '');
    };

    return (
        <div>
            {searchQuery !== undefined && (
                <input
                    style={{ width: '100%', height: 30 }}
                    placeholder="Search for a Country"
                    value={searchQuery || ''}
                    onChange={handleInputChange}
                />
            )}
        </div>
    );
};