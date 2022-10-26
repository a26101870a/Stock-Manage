import React from 'react'

export default function Item({
    stock,
    increaseStockAmount,
    decreaseStockAmount,
    removeFromBuyList,
    removeFromStockList
}) {
    function increaseAmount() {
        increaseStockAmount({ code: stock.code })
    }

    function decreaseAmount() {
        decreaseStockAmount({ code: stock.code })
    }

    function removeStock() {
        removeFromBuyList({ code: stock.code })
        removeFromStockList({ code: stock.code })
    }

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
                <button onClick={decreaseAmount}>
                    -
                </button>
                <span>
                    {stock.amount}
                </span>
                <button onClick={increaseAmount}>
                    +
                </button>
            </div>
            <div className='buyItem_delete' onClick={removeStock}>
                <i className="fa-solid fa-trash-can" />
            </div>
        </div>
    )
}
