import React from 'react'

export default function Aaccumulator() {
    const startWord = 'Total Cost: '
    let amount = 1000000000000;
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
