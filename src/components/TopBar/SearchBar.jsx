import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    let [searchValue, setSearchValue] = useState('');
    let navigate = useNavigate();

    return (
        <div className='searchBar'>
            <label htmlFor="TopBarSearch"><i className='fa-solid fa-magnifying-glass'></i></label>
            <input type='text' id='TopBarSearch'
                className='searchBar__input'
                title='Please Enter Stock Number eg. 2330'
                placeholder='Search for Stock'
                value={searchValue}
                onChange={(e) => { setSearchValue(e.target.value) }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        if (searchValue.length === 4 &&
                            (typeof parseInt(searchValue)) === 'number') {
                            navigate(`/stock/${searchValue}`);
                            setSearchValue('');
                        } else { alert('Please enter 4 digit numbers to search for stock') }
                    }
                }}
            />
            <span><i className="fa-sharp fa-solid fa-circle-arrow-left"
                onClick={() => {
                    if (searchValue.length === 4 &&
                        (typeof parseInt(searchValue)) === 'number') {
                        navigate(`/stock/${searchValue}`);
                        setSearchValue('');
                    } else { alert('Please enter 4 digit numbers to search for stock') }
                }}></i></span>
        </div >

    )
};

export default SearchBar;