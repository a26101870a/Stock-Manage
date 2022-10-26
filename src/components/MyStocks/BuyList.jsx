import React from 'react';
import Item from './Item';

export default function WatchList({ buyList }) {
    const isAnyItem = (buyList.length !== 0);

    return (
        <div className='l-buyList buyList'>
            {!isAnyItem && <div>Nothing</div>}
            {buyList.map((item, index) => (
                <Item key={index} stock={item} />
            ))}
        </div>
    )
}