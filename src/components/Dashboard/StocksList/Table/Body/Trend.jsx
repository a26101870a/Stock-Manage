import React from 'react'

export default function Trend({ trend }) {
    let trendClassName = 'listItem_trend ';
    let plusSign = '+';

    if (trend > 0) {
        trendClassName += 'trend-up ';
    } else if (trend < 0) {
        trendClassName += 'trend-down ';
    }

    return (
        <td className={trendClassName}>
            {trend > 0 && plusSign}
            {trend.slice(0, trend.length - 2)}
        </td>
    )
}
