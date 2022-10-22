import React from 'react'

export default function Buttons({ confirmSelect, toggleShow }) {
    return (
        <div className='btn-group'>
            <button className='btn-confirm'
                onClick={confirmSelect}>
                新增
            </button>
            <button className='btn-cancel'
                onClick={toggleShow}>
                取消
            </button>
        </div>
    )
}
