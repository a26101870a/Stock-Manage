import React from 'react';
import { useState, useEffect } from 'react';
import BoardIndex from 'Components/Dashboard/BoardIndex';
import Analytics from 'Components/Dashboard/Analytics';
import PopularStocks from 'Components/Dashboard/PopularStocks';
import StocksList from 'Components/Dashboard/StocksList';
import { getCurrentDate } from 'Functions/getCurrentDate';

const Dashboard = () => {
    const [date, setDate] = useState('');
    useEffect(() => { setDate(getCurrentDate()) }, [])

    return (
        <div className='l-content l-dashBoard' >
            <BoardIndex date={date} />
            <Analytics />
            <PopularStocks />
            <StocksList />
        </div >
    )
}

export default Dashboard;