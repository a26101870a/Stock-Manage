import React from 'react'

export default function Toggle({ isBuying, toggleReadyToBuy }) {
    return (
        <td className="listItem_add">
            {!isBuying &&
                <i className="fa-solid fa-square-plus gray"
                    onClick={toggleReadyToBuy} />}
            {isBuying &&
                <i className="fa-sharp fa-solid fa-square-check green"
                    onClick={toggleReadyToBuy} />}
        </td>
    )
}
