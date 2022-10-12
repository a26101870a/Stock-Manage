import React, { useState, useEffect } from "react";
import Topbar from './Topbar'
import Content from './Content'
import MI_5MINS_HIST from 'Data/MI_5MINS_HIST.json'

export default function Analytics({ date }) {
    const [historyData, setHistoryData] = useState(null);

    useEffect(() => {
        fetch(`https://www.twse.com.tw/indicesReport/MI_5MINS_HIST?response=json&date=${date}`)
            .then(response => response.json())
            .then(json => setHistoryData(json))
    }, [])

    if (historyData === null) {
        return (
            <div className="l-analytics analytics" >
                <Topbar />
                <Content data={MI_5MINS_HIST.data} />
            </div>
        );
    }
    return (
        <div className="l-analytics analytics" >
            <Topbar />
            <Content data={historyData.data} />
        </div>
    );
};