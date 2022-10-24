import React from 'react'

export default function Input({ filterValue, setFilterValue }) {
    const title = 'Please Enter Stock Number or Name';
    const placeholder = 'Search for Stock';

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
