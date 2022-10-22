import React from 'react';
import Item from './Item';

export default function WatchList({ stockData }) {
    return (
        <div>
            {stockData.map((item, index) => (
                <Item key={index} data={item} />
            ))}
        </div>
    )
}