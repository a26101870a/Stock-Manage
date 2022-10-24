import React from 'react'

export default function Label() {
    const iconClassName = 'fa-solid fa-magnifying-glass'

    return (
        <label htmlFor="TopBarSearch">
            <i className={iconClassName}></i>
        </label>
    )
}
