import React from "react";

const BoardIndexCard = (props) => {
    // trend value is only defined as 'red' or 'green'
    let trend = props.data[2].split(':')[1].split('\'')[0];
    let trendNumber = props.data[4];

    let trendClassName = decideTrendClass(trend, trendNumber)

    return (
        <div className="indexCard">
            <div className="indexCard__title">{props.data[0]}</div>
            <div className="indexCard__content">
                <span className="indexCard__closingIndex">收盤: {props.data[1].split('.')[0]}</span>
                <span className={trendClassName}>
                    {(trend === 'red' && trendNumber !== '--') && '+'}{trendNumber}
                </span>
            </div>
        </div>
    );
}

export default BoardIndexCard;

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
