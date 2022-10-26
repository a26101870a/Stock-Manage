import React from 'react';
import Item from './Item';
import Accumulator from './Accumulator';

export default function BuyList({
    buyList,
    increaseStockAmount,
    decreaseStockAmount,
}) {
    const isAnyItem = (buyList.length !== 0);

    return (
        <div className='l-buyList buyList'>
            {!isAnyItem && <div>No Stock Here</div>}
            {buyList.map((item, index) => (
                <Item
                    key={index}
                    stock={item}
                    increaseStockAmount={increaseStockAmount}
                    decreaseStockAmount={decreaseStockAmount}
                />
            ))}
            {isAnyItem && <Accumulator />}
        </div>
    )
}