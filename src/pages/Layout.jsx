import React from 'react';
import { Outlet } from 'react-router-dom'
import SideBar from 'Components/Layout/SideBar';
import TopBar from 'Components/Layout/TopBar';

const Layout = () => {
    return (
        <div className='l-main'>
            <SideBar />
            <TopBar />
            <Outlet />
        </div>
    )
}

export default Layout;