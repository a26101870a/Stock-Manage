import React from "react";
import user from 'Images/user1.jpg'

export default function User() {
    return (
        <div className="user">
            <img className="user_avatar" src={user} alt="UserName" />
        </div>
    )
};