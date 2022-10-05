import React from 'react';

const PopularTableItem = (props) => {
    let trendSign = props.data[9];
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
                <div className='popularItem__name'>{props.data[2]}</div>
                <div className='popularItem__number'>{props.data[1]}</div>
            </td>
            <td className='popularItem__price'>{props.data[8]}</td>
            <td className={trendClassName}>
                {(props.data[9] === '' || props.data[9] === 'X') && '--'}
                {(props.data[9] !== '' && props.data[9] !== 'X') && `${trendSign}${props.data[10]}`}
            </td>
        </tr>
    );
};

export default PopularTableItem;