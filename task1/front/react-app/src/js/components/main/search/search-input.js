import React from 'react'

export default function SearchInput(props) {
    return (
        <input 
            className="search__input"
            type="text"
            placeholder="Search..."
            autoComplete="off"
            autoFocus
            value={props.value}
            onChange={props.onChange}
        />
    );
}
