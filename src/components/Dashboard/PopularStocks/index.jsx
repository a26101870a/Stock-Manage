import React, { useState, useEffect } from "react";
import Topbar from './Topbar';
import Table from "./Table";

export default function PopularStocks({ date }) {
    const [popularStocksData, setPopularStocksData] = useState(null);

    useEffect(() => {
        fetch(`https://www.twse.com.tw/exchangeReport/MI_INDEX20?response=json&date=${date}`)
            .then(response => response.json())
            .then(json => setPopularStocksData(json))
    }, [])

    if (popularStocksData === null) {
        return <h2>Loading datas...</h2>;
    }
    return (
        <div className="l-popularStocks popularStocks" >
            <Topbar />
            <Table data={popularStocksData.data} />
        </div>
    );
};