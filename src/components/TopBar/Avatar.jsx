import React from "react";
import user from 'Images/user1.jpg'

const Avatar = () => {
    return (
        <div className="avatar">
            <img className="avatar__img" src={user} alt="UserName" />
        </div>
    )
};

export default Avatar;