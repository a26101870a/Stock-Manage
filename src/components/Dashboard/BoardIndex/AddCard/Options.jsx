import React from 'react'

export default function Options({ optionsNames }) {
    return (
        <select className='card_select'
            name="BoardSelect"
            id="BoardSelect">
            {optionsNames.map((item, index) => {
                return (
                    <option key={index} value={item} >
                        {item}
                    </option>
                )
            })}
        </select>
    )
}
