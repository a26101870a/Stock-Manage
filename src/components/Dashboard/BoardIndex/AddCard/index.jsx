import React, { useState } from 'react'
import PlusSign from './PlusSign';
import Select from './Select';

export default function AddCard({ pointerList, addToboardList }) {
    const [show, setShow] = useState(false)

    function toggleShow() {
        setShow(prevShow => !prevShow)
    }

    return (
        <>
            {!show && (<PlusSign toggleShow={toggleShow} />)}
            {show && (<Select
                toggleShow={toggleShow}
                pointerList={pointerList}
                addToboardList={addToboardList}
            />)}
        </>
    )
}
