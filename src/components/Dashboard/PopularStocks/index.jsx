import React, { useState, useEffect } from "react";
import Topbar from './Topbar';
import Table from "./Table";
import MI_INDEX20 from 'Data/MI_INDEX20.json'

export default function PopularStocks({ date }) {
    const [popularStocksData, setPopularStocksData] = useState(null);

    useEffect(() => {
        fetch(`https://www.twse.com.tw/exchangeReport/MI_INDEX20?response=json&date=${date}`)
            .then(response => response.json())
            .then(json => setPopularStocksData(json))
    }, [])

    if (popularStocksData === null) {
        return (
            <div className="l-popularStocks popularStocks" >
                <Topbar />
                <Table data={MI_INDEX20.data} />
            </div>
        );
    }
    return (
        <div className="l-popularStocks popularStocks" >
            <Topbar />
            <Table data={popularStocksData.data} />
        </div>
    );
};