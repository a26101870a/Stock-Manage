import React from 'react'

export default function Item({ data }) {
    return (
        <div>
            {data.number} {data.name} {data.price}
        </div>
    )
}
