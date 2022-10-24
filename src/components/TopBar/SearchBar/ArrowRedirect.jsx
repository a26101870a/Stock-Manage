import React from 'react'

export default function ArrowRedirect({
    searchValue,
    setSearchValue,
    navigate
}) {
    const iconClassName = 'fa-sharp fa-solid fa-circle-arrow-left'
    const alertMessage = 'Please enter 4 digit numbers to search for stock';

    return (
        <span>
            <i
                className={iconClassName}
                onClick={() => {
                    if (searchValue.length === 4 &&
                        (typeof parseInt(searchValue)) === 'number') {
                        navigate(`/stock/${searchValue}`);
                        setSearchValue('');
                    } else { alert({ alertMessage }) }
                }}
            />
        </span>
    )
}
