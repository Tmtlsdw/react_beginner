import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className="ma5">

        <input
            className="code pa2 ma2 tc br4 bg-lightest-purple"
            type="search"
            placeholder="Look for pet"
            onChange={searchChange}
        />
        </div>
    );
}
export default SearchBox;