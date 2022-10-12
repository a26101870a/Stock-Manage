import React from 'react';
import BoardIndex from './BoardIndex';
import Analytics from './Analytics';
import PopularStocks from './PopularStocks';
import StocksList from './StocksList';
import getBusinessDay from 'Functions/getBusinessDay'

export default function Dashboard() {
    const businessDay = getBusinessDay();

    return (
        <div className='l-content l-dashBoard' >
            <BoardIndex date={businessDay} />
            <Analytics date={businessDay} />
            <PopularStocks date={businessDay} />
            <StocksList date={businessDay} />
        </div >
    )
}