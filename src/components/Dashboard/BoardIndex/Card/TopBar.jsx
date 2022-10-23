import React from 'react'

export default function Topbar({ title, deleteIndex }) {
    return (
        <div className="card_topbar">
            <div className="card_title">
                {title}
            </div>
            <button
                className="card_delete"
                onClick={deleteIndex}
            >
                &times;
            </button>
        </div>
    )
}
