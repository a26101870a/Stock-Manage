import React from 'react'

export default function Select() {
    let selectTime = ['Day', 'Week', 'Month', 'Year',]

    return (
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
    )
}
