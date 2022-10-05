import React from 'react';
import { NavLink } from 'react-router-dom';

const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon: <i className="fa-solid fa-border-all"></i>,
        to: '/',
        section: ''
    },
    {
        display: 'Stock',
        icon: <i className="fa-solid fa-sack-dollar"></i>,
        to: '/stock',
        section: 'stock'
    },
    {
        display: 'Portfolio',
        icon: <i className="fa-solid fa-briefcase"></i>,
        to: '/portfolio',
        section: 'portfolio'
    },
    {
        display: 'MyStocks',
        icon: <i className="fa-solid fa-user"></i>,
        to: '/mystocks',
        section: 'mystocks'
    },
    {
        display: 'Help&Support',
        icon: <i className="fa-solid fa-circle-info"></i>,
        to: '/help',
        section: 'help'
    },
    {
        display: 'Settings',
        icon: <i className="fa-solid fa-gear"></i>,
        to: '/settings',
        section: 'settings'
    },
]

const SideBar = () => {
    return (
        <div className='l-sidebar sidebar'>
            <div className='logo '>
                StockManager
            </div>
            <div className='menu '>
                {sidebarNavItems.map((item, index) => (
                    <div key={index}>
                        <NavLink to={item.to}
                            className={({ isActive }) => 'menu__item ' +
                                (isActive ? 'menu__item-active ' : '')}>
                            <div className='menu__icon '>{item.icon}</div>
                            <div className='menu__display '>{item.display}</div>
                        </NavLink>
                        {index == 3 && <hr style={{ margin: 'auto', width: '80%' }} />}
                    </div>

                ))}
            </div>
        </div >
    )
}

export default SideBar;