import React from 'react'

export default function Buttons({ confirmSelect, toggleShow }) {
    let ButtonTags = ['新增', '取消',];

    return (
        <div className='btn-group'>
            <button className='btn-confirm'
                onClick={confirmSelect}>
                {ButtonTags[0]}
            </button>
            <button className='btn-cancel'
                onClick={toggleShow}>
                {ButtonTags[1]}
            </button>
        </div>
    )
}
