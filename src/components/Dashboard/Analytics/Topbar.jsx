import React from "react";

const selectTime = ['Day', 'Week', 'Month', 'Year',]
const selectName = [
    '發行量加權股價指數',
    '臺灣公司治理100指數',
    '機電類指數',
    '食品類指數',
    '金融保險類指數',
]

export default function Topbar() {
    return (
        <div className='analytics__topbar'>
            <div className="analytics__title">Analytics</div>
            <div className="analytics__select">
                {selectTime.map((item, index) => (
                    <button key={index}>{item}</button>
                ))}
                <select name="analyticsSelect" id="analyticsSelect">
                    {selectName.map((item, index) => (
                        <option key={index}>{item}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}