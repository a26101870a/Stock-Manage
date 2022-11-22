import React from 'react';
import BoardIndex from 'Containers/BoardIndex';
import StocksList from './StocksList';

export default function Dashboard() {
    return (
        <div className='l-content l-dashBoard' >
            <BoardIndex />
            <StocksList />
        </div >
    )
}