import React from "react";

const PopularStocksTableHeader = () => {
    return (
        <tr className='popularItem popularItem__names '>
            <th className='popularItem__title'>Name</th>
            <th className='popularItem__price'>Price</th>
            <th className='popularItem__trend'>Trend</th>
        </tr >
    );
}

export default PopularStocksTableHeader;