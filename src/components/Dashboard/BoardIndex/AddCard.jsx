import React, { useState } from 'react'
import { getColumnValue } from 'Functions/getColumnValue'
import { ACTIONS } from './index';

export default function AddCard({ data, showIndex, dispatch }) {
    const name = getColumnValue(data, 0);
    const [show, setShow] = useState(false)

    function toogleShow() {
        setShow(prevShow => !prevShow)
    }

    function findSelectIndex() {
        const sb = document.querySelector('#BoardIndexSelect');

        const selectedValues = [].filter
            .call(sb.options, option => option.selected)
            .map(option => option.text);

        return name.indexOf(selectedValues[0])
    }

    function confirmSelectIndex() {
        const targetIndex = findSelectIndex();
        const isIndexExisting = showIndex.includes(targetIndex);

        if (!isIndexExisting) {
            dispatch({ type: ACTIONS.ADD_CARD, payload: targetIndex })
        } else {
            alert('指數已存在')
        }
    }

    return (
        <>
            {!show && (
                <div className='indexCard'>
                    <button className='indexCard_add'
                        onClick={toogleShow}>
                        +
                    </button>
                </div>
            )}

            {show && (
                <div className='indexCard'>
                    <select className='indexCard_select'
                        name="BoardIndexSelect"
                        id="BoardIndexSelect">
                        {name.map((item, index) => {
                            return (
                                <option key={index} value={item} >
                                    {item}
                                </option>
                            )
                        })}
                    </select>
                    <div className='btn-group'>
                        <button className='btn-confirm'
                            onClick={confirmSelectIndex}>
                            新增
                        </button>
                        <button className='btn-cancel'
                            onClick={toogleShow}>
                            取消
                        </button>
                    </div>
                </div>

            )}


        </>
    )
}
