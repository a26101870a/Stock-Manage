import React from "react";
import { useState } from 'react';
import StocksListTopbar from 'Components/Dashboard/StocksList/StocksListTopbar';
import StocksListTable from 'Components/Dashboard/StocksList/StocksListTable';

const StocksList = () => {
    let [filterValue, setFilterValue] = useState('');

    return (<div className="l-stocksList stocksList" >
        <StocksListTopbar filterValue={filterValue} setFilterValue={setFilterValue} />
        <StocksListTable filterValue={filterValue} />
    </div>);
};

export default StocksList;