import React from 'react';
import BuyList from 'Containers/BuyList';
import Accumulator from './Accumulator';

export default function MyStocks() {
    return (
        <div className='l-content l-mystocks'>
            <BuyList />
            <Accumulator />
        </div>
    )
}