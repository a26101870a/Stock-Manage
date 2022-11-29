import React from 'react'

export default function Popup() {
    return (
        <div className='popup'
            onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
            }}>
            <ul>
                <li>個人資料</li>
                <li>隱私設定</li>
                <li>登出</li>
            </ul>
        </div>
    )
}
