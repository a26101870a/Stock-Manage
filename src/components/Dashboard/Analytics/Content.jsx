import React from "react";
import { useState, useEffect } from "react";
import lineChart from 'Functions/linechart.js';
import MI_5MINS_HIST from 'Data/MI_5MINS_HIST.json'

export default function Content() {
    var data = [];
    var date = [];
    var closingIndex = [];
    const size = useWindowSize();

    MI_5MINS_HIST.map(item => {
        date.push(item["Date"])
        closingIndex.push(item["ClosingIndex"])
    })

    date = date.map(item => transformDateFormat(item))
    closingIndex = closingIndex.map(item => parseInt(item, 10))

    var dataTemp = [date, closingIndex];

    for (let i = 0; i < dataTemp[0].length; i++) {
        let tempObj = {
            date: dataTemp[0][i],
            close: dataTemp[1][i]
        }

        data.push(tempObj);
    }

    useEffect(() => { lineChart(data) }, [size])

    return (
        <div className='analytics__content'></div>
    );
};

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

//Transform the date from TWSE whose format is YYY/MM/DD to YYYY/MM/DD
function transformDateFormat(date) {
    let regTransformYear = new RegExp('[0-9]{3}');
    let regSlashPosition = new RegExp('(.{4})(.{2})(.{2})');
    let replaceYear = '2022';
    let replaceSlash = '$1/$2/$3';

    return date.replace(regTransformYear, replaceYear).replace(regSlashPosition, replaceSlash)
}