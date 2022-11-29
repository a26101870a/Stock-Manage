import React, { useState } from "react";
import user from 'Images/user1.jpg'
import Popup from "./Popup";

export default function User() {
    const alternateName = "UserName";
    const [show, setShow] = useState(false)

    function changePopup() {
        setShow(precState => !precState)
    }

    return (
        <div className="user" onClick={changePopup}>
            <img
                className="user_avatar"
                src={user}
                alt={alternateName}
            />
            {show && <Popup />}
        </div>
    )
};