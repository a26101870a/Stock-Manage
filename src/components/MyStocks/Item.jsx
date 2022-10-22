import React from 'react'

export default function Item({ data }) {
    console.log(data)
    return (
        <div>
            {data.number} {data.name}
        </div>
    )
}
