import React from 'react'

export default function Toggle({ ready, toggleReadyToBuy }) {
    return (
        <td className="listItem_add">
            {!ready &&
                <i className="fa-solid fa-square-plus gray"
                    onClick={toggleReadyToBuy} />}
            {ready &&
                <i className="fa-sharp fa-solid fa-square-check green"
                    onClick={toggleReadyToBuy} />}
        </td>
    )
}
