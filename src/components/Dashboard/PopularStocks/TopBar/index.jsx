import React from "react";

const title = 'Popular Stocks'
const selectTime = ['Day', 'Week', 'Month', 'Year',]

export default function Topbar() {

    return (
        <div className='popular_topbar'>
            <div className='popular_title'>
                {title}
            </div>
            <div className="popular_select">
                <select name="popularSelet" id="popularSelet">
                    {selectTime.map((item, index) => (
                        <option
                            key={index}
                            value={item}
                        >
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}