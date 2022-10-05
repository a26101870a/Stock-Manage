import React from "react";
import PopularStocksTopbar from 'Components/Dashboard/PopularStocks/PopularStocksTopbar';
import PopularStocksTable from "Components/Dashboard/PopularStocks/PopularStocksTable";

const PopularStocks = () => {
    return (<div className="l-popularStocks popularStocks" >
        <PopularStocksTopbar />
        <PopularStocksTable />
    </div>);
};

export default PopularStocks;