import React from 'react';

export default function SearchBar({ filterValue, setFilterValue }) {
    return (
        <div className='searchBar'>
            <label htmlFor='StocksListSearch'><i className='fa-solid fa-magnifying-glass'></i></label>
            <input type='text' id='StocksListSearch'
                className='searchBar__input'
                title='Please Enter Stock Number or Name'
                placeholder='Search for Stock'
                value={filterValue}
                onChange={(e) => { setFilterValue(e.target.value) }}
            />
        </div>
    )
};