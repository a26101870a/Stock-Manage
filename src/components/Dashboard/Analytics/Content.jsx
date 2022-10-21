import React from "react";
import { useState, useEffect } from "react";
import lineChart from 'Functions/linechart.js';
import MI_5MINS_HIST from 'Data/MI_5MINS_HIST.json'

export default function Content() {
    const size = useWindowSize();
    var date = [];
    var ClosingIndex = [];

    MI_5MINS_HIST.map(item => {
        date.push(item["Date"])
        ClosingIndex.push(item["ClosingIndex"])
    })

    date = date.map((item) => {
        return item
            .replace(/[0-9]{3}/, '2022')
            .replace(/(.{4})(.{2})(.{2})/, '$1/$2/$3')
    })

    ClosingIndex = ClosingIndex.map((item) => { return parseInt(item, 10) })

    var dataTemp = [date, ClosingIndex];
    var data = [];

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
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}