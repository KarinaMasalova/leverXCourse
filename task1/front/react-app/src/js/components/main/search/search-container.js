import React, { useState } from "react";
import { useDispatch } from "react-redux";

import SearchInput from './search-input';
import SearchButton from './search-button';
import setSearchInputValue from "../../../store/actionCreators/setSearchInputValue";

export default function SearchContainer() {
    const [searchInputValue, setState] = useState();
    const dispatch = useDispatch();

    const handleSubmit = (event) =>  {
        event.preventDefault();
        dispatch(setSearchInputValue(searchInputValue.toLowerCase()));
    }

    return (
        <form className="search__container" method="GET" action="#" onSubmit={handleSubmit}>
            <span className="search__icon"></span>
            <SearchInput 
                value={searchInputValue}
                onChange={(e) => setState(e.target.value)}/>
            <SearchButton/>
        </form>
    );
}