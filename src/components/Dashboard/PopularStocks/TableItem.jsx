import React from 'react';

export default function TableItem({ data }) {
    let trendSign = data['Dir'];
    let trendClassName = 'popularItem__trend ';

    if (trendSign === '+') {
        trendClassName += 'trend-up ';
    } else {
        trendClassName += 'trend-down ';
    }

    return (
        <tr className='popularItem '>
            <td className='popularItem__title'>
                <div className='popularItem__name'>{data['Name']}</div>
                <div className='popularItem__number'>{data['Code']}</div>
            </td>
            <td className='popularItem__price'>{data['ClosingPrice']}</td>
            <td className={trendClassName}>
                {trendSign}{data['Change']}
            </td>
        </tr>
    );
};