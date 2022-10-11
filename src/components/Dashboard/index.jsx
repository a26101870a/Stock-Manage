import React from 'react';
import BoardIndex from './BoardIndex';
import Analytics from './Analytics';
import PopularStocks from './PopularStocks';
import StocksList from './StocksList';

export default function Dashboard() {
    return (
        <div className='l-content l-dashBoard' >
            <BoardIndex />
            <Analytics />
            <PopularStocks />
            <StocksList />
        </div >
    )
}