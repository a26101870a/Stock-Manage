import React from 'react';
import { Outlet } from 'react-router-dom'
import SideBar from 'Components/SideBar';
import TopBar from 'Components/TopBar';

export default function Layout() {
    return (
        <div className='l-main'>
            <SideBar />
            <TopBar />
            <Outlet />
        </div>
    )
};