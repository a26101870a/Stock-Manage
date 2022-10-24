import React from 'react'
import User from './User';
import Notificaion from "./Notification";

export default function Information() {
    return (
        <div className='topbar_information'>
            <Notificaion />
            <User />
        </div>
    )
}
