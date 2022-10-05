import React from 'react';
import SearchBar from 'Components/TopBar/SearchBar';
import User from 'Components/TopBar/User';

const TopBar = () => {
    return (
        <div className='l-topbar topbar'>
            <SearchBar />
            <User />
        </div>
    )
};

export default TopBar;