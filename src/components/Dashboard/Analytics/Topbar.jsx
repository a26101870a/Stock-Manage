import React from "react";

export default function Topbar() {
    return (
        <div className='analytics__topbar'>
            <div className="analytics__title">Analytics</div>
            <div className="analytics__select">
                <button>Day</button>
                <button>Week</button>
                <button>Month</button>
                <button>Year</button>
                <select name="analyticsSelect" id="analyticsSelect">
                    <option>發行量加權股價指數</option>
                    <option>臺灣公司治理100指數</option>
                    <option>機電類指數</option>
                    <option>食品類指數</option>
                    <option>金融保險類指數</option>
                </select>
            </div>
        </div>
    );
}