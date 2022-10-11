import React from 'react';
import SearchBar from './SearchBar';
import User from './User';
import Notificaion from "./Notification";

export default function TopBar() {
    return (
        <div className='l-topbar topbar'>
            <SearchBar />
            <div className='topbar_information'>
                <Notificaion />
                <User />
            </div>
        </div>
    )
};