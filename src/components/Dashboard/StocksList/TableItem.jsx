import React, { useEffect, useState } from "react";

export default function TableItem({ data, id, ready, addStock, removeStock, addToList, removeFromList }) {
    let trendRate = data['Change'];
    let trendClassName = 'listItem__trend ';
    const [readyToBuy, setReadyToBuy] = useState(ready)

    function toggleReadyToBuy() {
        setReadyToBuy(prevState => !prevState)

        if (!readyToBuy) {
            addStock({
                number: data['Code'],
                name: data['Name'],
                price: parseFloat(data['ClosingPrice'])
            })
            addToList(data['Code'])
        } else {
            removeStock({ number: data['Code'] })
            removeFromList(data['Code'])
        }
    }

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
                {!ready && <i className="fa-solid fa-square-plus gray" onClick={toggleReadyToBuy}></i>}
                {ready && <i className="fa-sharp fa-solid fa-square-check green" onClick={toggleReadyToBuy}></i>}
            </td>
        </tr>
    );
};