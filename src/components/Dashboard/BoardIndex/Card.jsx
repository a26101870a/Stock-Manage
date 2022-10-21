import React from "react";
import { ACTIONS } from './index';

export default function BoardIndexCard({ data, id, dispatch }) {

    // trend value is only defined as 'red' or 'green'
    let trend = data['漲跌'];
    let trendNumber = data['漲跌百分比'];
    let trendClassName = decideTrendClass(trend, trendNumber)

    function deleteIndex() {
        dispatch({ type: ACTIONS.DELETE_CARD, payload: id })
    }

    return (
        <div className="indexCard">
            <div className="indexCard__topbar">
                <div className="indexCard__title">{data["指數"]}</div>
                <button className="indexCard__delete"
                    onClick={deleteIndex}
                >
                    &times;
                </button>
            </div>

            <div className="indexCard__content">
                <span className="indexCard__closingIndex">收盤: {data['收盤指數']}</span>
                <span className={trendClassName}>
                    {(trend === '+' && trendNumber !== '--') && '+'}{trendNumber}
                </span>
            </div>
        </div>
    );
}

function decideTrendClass(trend, trendNumber) {
    let trendClassName = 'indexCard__trend'

    if (trendNumber === '--') {
        return trendClassName;
    }

    if (trend === '+') {
        trendClassName += ' indexCard__trend-up';
    } else {
        trendClassName += ' indexCard__trend-down'
    }

    return trendClassName;
}
