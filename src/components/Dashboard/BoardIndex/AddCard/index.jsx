import React, { useState } from 'react'
import PlusSign from './PlusSign';
import Select from './Select';

export default function AddCard({ showIndex, dispatch }) {
    const [show, setShow] = useState(false)

    function toggleShow() {
        setShow(prevShow => !prevShow)
    }

    return (
        <>
            {!show && (<PlusSign toggleShow={toggleShow} />)}
            {show && (<Select
                toggleShow={toggleShow}
                showIndex={showIndex}
                dispatch={dispatch}
            />)}
        </>
    )
}
