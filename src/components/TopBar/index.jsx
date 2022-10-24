import React from 'react';
import SearchBar from './SearchBar';
import Information from "./Information";

export default function TopBar() {
    return (
        <div className='l-topbar topbar'>
            <SearchBar />
            <Information />
        </div>
    )
};