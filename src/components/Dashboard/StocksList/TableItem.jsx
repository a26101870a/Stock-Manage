import React from "react";
import { useState } from "react";

export default function TableItem(props) {
    let trendRate = props.data['Change'];
    let trendClassName = 'listItem__trend ';

    const [readyToBuy, setReadyToBuy] = useState(false)

    function toggleReadyToBuy() {
        setReadyToBuy(prevState => !prevState)
    }

    if (trendRate > 0) {
        trendClassName += 'trend-up ';
    } else if (trendRate < 0) {
        trendClassName += 'trend-down ';
    }

    return (
        <tr className="listItem ">
            <td className="listItem__title">
                <div className="listItem__name">{props.data['Name']}</div>
                <div className="listItem__number">{props.data['Code']}</div>
            </td>
            <td className="listItem__opening">
                {(props.data['OpeningPrice'] === '') && '--'}
                {props.data['OpeningPrice']}
            </td>
            <td className="listItem__closing">
                {(props.data['ClosingPrice'] === '') && '--'}
                {props.data['ClosingPrice']}
            </td>
            <td className="listItem__highest">
                {(props.data['HighestPrice'] === '') && '--'}
                {props.data['HighestPrice']}
            </td>
            <td className="listItem__lowest">
                {(props.data['LowestPrice'] === '') && '--'}
                {props.data['LowestPrice']}
            </td>
            <td className={trendClassName}>
                {trendRate > 0 && '+'}
                {props.data['Change'].slice(0, props.data['Change'].length - 2)}
            </td>
            <td className="listItem__add">
                {!readyToBuy && <i className="fa-solid fa-square-plus gray" onClick={toggleReadyToBuy}></i>}
                {readyToBuy && <i class="fa-sharp fa-solid fa-square-check green" onClick={toggleReadyToBuy}></i>}
            </td>
        </tr>
    );
};