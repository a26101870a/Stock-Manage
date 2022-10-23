import React from 'react'

export default function Content({ closingIndex, trend, trendPercent }) {
    let trendClassName = decideTrendClass(trend, trendPercent);
    let closingString = `收盤: ${closingIndex}`

    return (
        <div className="card_content">
            <span className="card_closingIndex">{closingString}</span>
            <span className={trendClassName}>
                {(trend === '+' && trendPercent !== '--') && '+'}{trendPercent}
            </span>
        </div>
    )
}

function decideTrendClass(trend, trendPercent) {
    let trendClassName = 'card_trend'

    //The stock have a consistent trend.
    if (trendPercent === '--') {
        return trendClassName;
    }

    if (trend === '+') {
        trendClassName += ' card_trend-up';
    } else {
        trendClassName += ' card_trend-down'
    }

    return trendClassName;
}