import React from 'react';
import Item from './Item';

export default function WatchList({ toBuyList }) {
    return (
        <div>
            {toBuyList.map((item, index) => (
                <Item key={index} data={item} />
            ))}
        </div>
    )
}