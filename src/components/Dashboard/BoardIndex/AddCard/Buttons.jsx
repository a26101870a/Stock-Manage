import React from 'react'

const ButtonTags = ['新增', '取消',]

export default function Buttons({ confirmSelect, toggleShow }) {
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
