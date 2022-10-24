import React from 'react'

export default function Input({
    searchValue,
    setSearchValue,
    navigate
}) {
    const title = 'Please Enter Stock Number eg. 2330';
    const placeholder = 'Search for Stock';
    const alertMessage = 'Please enter 4 digit numbers to search for stock';

    return (
        <input type='text'
            id='TopBarSearch'
            className='searchBar_input'
            title={title}
            placeholder={placeholder}
            value={searchValue}
            onChange={(e) => { setSearchValue(e.target.value) }}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    if ((searchValue.length === 4) &&
                        ((typeof parseInt(searchValue)) === 'number')) {
                        navigate(`/stock/${searchValue}`);
                        setSearchValue('');
                    } else { alert({ alertMessage }) }
                }
            }}
        />
    )
}
