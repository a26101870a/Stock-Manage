import React from 'react'

export default function PlusSign({ toggleShow }) {
    return (
        <div className='card'>
            <button
                className='card_add'
                onClick={toggleShow}
            >
                +
            </button>
        </div>
    )
}
