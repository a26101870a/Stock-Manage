import React from 'react'

export default function Accumulator({ buyList }) {
    const startWord = 'Total Cost: '

    let amount = caculateCost(buyList);
    amount = transformToThousandComma(amount);

    return (
        <div className='accumulator'>
            {startWord}<span>{amount}</span>
        </div>
    )
}

function transformToThousandComma(number) {
    let regTransformComma = new RegExp('\\B(?=(?:\\d{3})+(?!\\d))', 'g')

    return number.toString().replace(regTransformComma, ',');
}

function caculateCost(dataset) {
    let accumulator = 0;

    dataset
        .filter(stock => !isNaN(stock.price))
        .map((stock) => {
            let lot = 1000; //The stock amount unit that a lot represents one thousand shares
            let price = stock.price * lot;
            let amount = stock.amount;
            let cost = price * amount

            accumulator += cost;
        })

    return accumulator
}