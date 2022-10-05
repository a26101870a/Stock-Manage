import React from "react";
import Avatar from "Components/TopBar/Avatar";
import Notificaion from "Components/TopBar/Notification";

const UserInformation = () => {
    return (
        <div className="user">
            <Avatar />
            <Notificaion />
        </div>
    )
};

export default UserInformation;