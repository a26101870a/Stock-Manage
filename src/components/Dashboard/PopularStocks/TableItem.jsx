import React from 'react';

export default function TableItem({ data }) {
    let trendSign = data[9];
    let trendClassName = 'popularItem__trend ';

    if (trendSign !== 'X' && trendSign !== '') {
        trendSign = trendSign.split('>')[1].split('<')[0];

        if (trendSign === '+') {
            trendClassName += 'trend-up ';
        } else {
            trendClassName += 'trend-down ';
        }
    }

    return (
        <tr className='popularItem '>
            <td className='popularItem__title'>
                <div className='popularItem__name'>{data[2]}</div>
                <div className='popularItem__number'>{data[1]}</div>
            </td>
            <td className='popularItem__price'>{data[8]}</td>
            <td className={trendClassName}>
                {(data[9] === '' || data[9] === 'X') && '--'}
                {(data[9] !== '' && data[9] !== 'X') && `${trendSign}${data[10]}`}
            </td>
        </tr>
    );
};