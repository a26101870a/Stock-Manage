import React from "react";

const headerNames = [
    {
        title: 'Name'
    },
    {
        price: 'Name'
    },
    {
        trend: 'Trend'
    },
]

export default function Header() {
    return (
        <tr className='popularItem popularItem_header '>
            {headerNames.map((obj, index) => (
                <th
                    key={index}
                    className={`popularItem_${Object.keys(obj)[0]}`}
                >
                    {`${Object.values(obj)[0]}`}
                </th>
            )
            )}
        </tr >
    );
}