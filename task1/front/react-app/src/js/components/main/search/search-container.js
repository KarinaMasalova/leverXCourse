import React, { useState } from "react";

import SearchInput from './search-input';
import SearchButton from './search-button';

export default function SearchContainer(props) {
    const [state, setState] = useState({ inputValue: '' });

    const handleChange = (event) => {
        setState({inputValue: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSearchContainerSubmit(state.inputValue.toLowerCase());
    }

    return (
        <form className="search__container" method="GET" action="#" onSubmit={handleSubmit}>
            <span className="search__icon"></span>
            <SearchInput value={state.inputValue} onChange={handleChange}/>
            <SearchButton/>
        </form>
    );
}