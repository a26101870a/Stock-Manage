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
        display: 'MyStocks',
        icon: <i className="fa-solid fa-user"></i>,
        to: '/mystocks',
        section: 'mystocks'
    },
    {
        display: 'Settings',
        icon: <i className="fa-solid fa-gear"></i>,
        to: '/settings',
        section: 'settings'
    },
]

export default function Menu() {
    return (
        <div className='menu'>
            {sidebarNavItems.map((item, index) => (
                <NavLink key={index} to={item.to}
                    className={({ isActive }) => 'menu_item ' +
                        (isActive ? 'menu_item-active ' : '')}>
                    <div className='menu_icon '>{item.icon}</div>
                    <div className='menu_display '>{item.display}</div>
                </NavLink>
            ))}
        </div>
    )
}