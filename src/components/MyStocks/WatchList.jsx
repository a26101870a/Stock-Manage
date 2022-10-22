import React from 'react';
import Item from './Item';

export default function WatchList({ stockData }) {
    console.log(stockData)
    return (
        <div>
            {stockData.map((item) => (
                <Item data={item} />
            ))}
        </div>
    )
}