import React, { useEffect, useState } from "react";

export default function TableItem({ data, addStock }) {
    let trendRate = data['Change'];
    let trendClassName = 'listItem__trend ';

    const [readyToBuy, setReadyToBuy] = useState(false)

    function toggleReadyToBuy() {
        setReadyToBuy(prevState => !prevState)
    }

    useEffect(() => {
        if (readyToBuy) {
            addStock({
                number: data['Code'],
                name: data['Name'],
                price: parseFloat(data['ClosingPrice'])
            })
        }
    }, [readyToBuy])

    if (trendRate > 0) {
        trendClassName += 'trend-up ';
    } else if (trendRate < 0) {
        trendClassName += 'trend-down ';
    }

    return (
        <tr className="listItem ">
            <td className="listItem__title">
                <div className="listItem__name">{data['Name']}</div>
                <div className="listItem__number">{data['Code']}</div>
            </td>
            <td className="listItem__opening">
                {(data['OpeningPrice'] === '') && '--'}
                {data['OpeningPrice']}
            </td>
            <td className="listItem__closing">
                {(data['ClosingPrice'] === '') && '--'}
                {data['ClosingPrice']}
            </td>
            <td className="listItem__highest">
                {(data['HighestPrice'] === '') && '--'}
                {data['HighestPrice']}
            </td>
            <td className="listItem__lowest">
                {(data['LowestPrice'] === '') && '--'}
                {data['LowestPrice']}
            </td>
            <td className={trendClassName}>
                {trendRate > 0 && '+'}
                {data['Change'].slice(0, data['Change'].length - 2)}
            </td>
            <td className="listItem__add">
                {!readyToBuy && <i className="fa-solid fa-square-plus gray" onClick={toggleReadyToBuy}></i>}
                {readyToBuy && <i className="fa-sharp fa-solid fa-square-check green" onClick={toggleReadyToBuy}></i>}
            </td>
        </tr>
    );
};