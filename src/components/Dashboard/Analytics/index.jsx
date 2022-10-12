import React, { useState, useEffect } from "react";
import Topbar from './Topbar'
import Content from './Content'

export default function Analytics({ date }) {
    const [historyData, setHistoryData] = useState(null);

    useEffect(() => {
        fetch(`https://www.twse.com.tw/indicesReport/MI_5MINS_HIST?response=json&date=${date}`)
            .then(response => response.json())
            .then(json => setHistoryData(json))
    }, [])

    if (historyData === null) {
        return <h2>Loading datas...</h2>;
    }
    return (
        <div className="l-analytics analytics" >
            <Topbar />
            <Content data={historyData.data} />
        </div>
    );
};