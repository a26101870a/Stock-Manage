import React from 'react';

export default function Item({ data }) {
    let trendSign = data['Dir'];
    let trendClassName = 'popularItem_trend ';

    if (trendSign === '+') {
        trendClassName += 'trend-up ';
    } else {
        trendClassName += 'trend-down ';
    }

    return (
        <tr className='popularItem '>
            <td className='popularItem_title'>
                <div className='popularItem_name'>
                    {data['Name']}
                </div>
                <div className='popularItem_number'>
                    {data['Code']}
                </div>
            </td>
            <td className='popularItem_price'>
                {data['ClosingPrice']}
            </td>
            <td className={trendClassName}>
                {trendSign}{data['Change']}
            </td>
        </tr>
    );
};