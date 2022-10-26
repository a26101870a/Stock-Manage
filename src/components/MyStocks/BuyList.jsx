import React from 'react';
import Item from './Item';

export default function WatchList({ buyList }) {
    return (
        <div>
            {buyList.map((item, index) => (
                <Item key={index} data={item} />
            ))}
        </div>
    )
}