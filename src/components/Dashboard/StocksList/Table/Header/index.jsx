import React from "react";

const headerNames = [
    {
        title: 'Name'
    },
    {
        opening: 'OpeningPrice'
    },
    {
        closing: 'ClosingPrice'
    },
    {
        highest: 'HighestPrice'
    },
    {
        lowest: 'LowestPrice'
    },
    {
        trend: 'Trend'
    },
    {
        add: ''
    },
]

export default function Header() {
    return (
        <tr className='listItem listItem_header '>
            {headerNames.map((obj, index) => (
                <th
                    key={index}
                    className={`listItem_${Object.keys(obj)[0]}`}
                >
                    {`${Object.values(obj)[0]}`}
                </th>
            )
            )}
        </tr>
    );
};