import React from 'react'

export default function PlusSign({ toggleShow }) {
    let plusSign = '+';

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
