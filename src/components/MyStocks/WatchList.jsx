import React from 'react'

export default function WatchList({ stockData }) {
    return (
        <div>
            {stockData[0].id}
            {stockData[0].number}
            {stockData[0].name}
            {stockData[0].price}
        </div>
    )
}