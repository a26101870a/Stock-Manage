import React from 'react'

export default function Title({ name, code }) {
    return (
        <td className="listItem_title">
            <div className="listItem_name">{name}</div>
            <div className="listItem_code">{code}</div>
        </td>
    )
}
