import React from 'react'

export default function Options({ name }) {
    return (
        <select className='card_select'
            name="BoardSelect"
            id="BoardSelect">
            {name.map((item, index) => {
                return (
                    <option key={index} value={item} >
                        {item}
                    </option>
                )
            })}
        </select>
    )
}
