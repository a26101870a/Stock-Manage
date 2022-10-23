import React from 'react'

export default function Input({ filterValue, setFilterValue }) {
    let title = 'Please Enter Stock Number or Name';
    let placeholder = 'Search for Stock';

    return (
        <input type='text'
            id='StocksListSearch'
            className='searchBar_input'
            title={title}
            placeholder={placeholder}
            value={filterValue}
            onChange={(e) => { setFilterValue(e.target.value) }}
        />
    )
}
