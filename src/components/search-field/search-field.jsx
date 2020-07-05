import React from 'react';

import './search-field.css'

export const SearchField = ({ placeholder, handler }) => {
    return (
        <input type="search" placeholder={placeholder} onChange={handler}></input>
    )
}