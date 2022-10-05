import React from 'react';

const SearchBar = (props) => {
    return (
        <div className='searchBar'>
            <label htmlFor='StocksListSearch'><i className='fa-solid fa-magnifying-glass'></i></label>
            <input type='text' id='StocksListSearch'
                className='searchBar__input'
                title='Please Enter Stock Number or Name'
                placeholder='Search for Stock'
                value={props.filterValue}
                onChange={(e) => { props.setFilterValue(e.target.value) }}
            />
        </div>
    )
};

export default SearchBar;