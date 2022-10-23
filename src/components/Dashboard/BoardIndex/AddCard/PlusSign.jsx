import React from 'react'

const plusSign = '+';

export default function PlusSign({ toggleShow }) {
    return (
        <div className='card'>
            <button
                className='card_add'
                onClick={toggleShow}
            >
                {plusSign}
            </button>
        </div>
    )
}
