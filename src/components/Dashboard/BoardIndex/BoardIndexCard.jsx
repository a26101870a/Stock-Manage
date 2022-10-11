import React from "react";

export default function BoardIndexCard({ data }) {
    // trend value is only defined as 'red' or 'green'
    let trend = data[2].split(':')[1].split('\'')[0];
    let trendNumber = data[4];

    let trendClassName = decideTrendClass(trend, trendNumber)

    return (
        <div className="indexCard">
            <div className="indexCard__title">{data[0]}</div>
            <div className="indexCard__content">
                <span className="indexCard__closingIndex">收盤: {data[1].split('.')[0]}</span>
                <span className={trendClassName}>
                    {(trend === 'red' && trendNumber !== '--') && '+'}{trendNumber}
                </span>
            </div>
        </div>
    );
}

function decideTrendClass(trend, trendNumber) {
    let trendClassName = 'indexCard__trend'

    if (trendNumber === '--') {
        return trendClassName;
    }

    if (trend === 'red') {
        trendClassName += ' indexCard__trend-up';
    } else {
        trendClassName += ' indexCard__trend-down'
    }

    return trendClassName;
}
