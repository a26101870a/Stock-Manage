import React from 'react'

export default function Label() {
    let iconClassName = 'fa-solid fa-magnifying-glass'

    return (
        <label htmlFor='StocksListSearch'>
            <i className={iconClassName}></i>
        </label>
    )
}
