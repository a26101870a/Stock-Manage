import React from 'react'

const priceColumnNames = [
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
]

export default function Price({ data }) {
    return (
        <>
            {priceColumnNames.map((obj, index) => (
                <td
                    key={index}
                    className={`listItem_${Object.keys(obj)[0]}`}
                >
                    {(data[`${Object.values(obj)[0]}`] === '') && '--'}
                    {data[`${Object.values(obj)[0]}`]}
                </td>
            )
            )}
        </>
    )
}
