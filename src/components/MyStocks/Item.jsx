import React from 'react'

export default function Item({ stock }) {
    return (
        <div className='buyItem'>
            <div className='buyItem_code'>
                {stock.code}
            </div>
            <div className='buyItem_name'>
                {stock.name}
            </div>
            <div className='buyItem_price'>
                {stock.price}
            </div>
            <div className='buyItem_amount'>
                <button>-</button>
                <span>{stock.amount}</span>
                <button>+</button>
            </div>
            <div className='buyItem_delete'>
                <i className="fa-solid fa-trash-can" />
            </div>
        </div>
    )
}
