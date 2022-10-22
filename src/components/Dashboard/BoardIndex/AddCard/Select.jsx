import React from 'react'
import MI_INDEX from 'Data/MI_INDEX.json';
import { ACTIONS } from '../index';
import Options from './Options';
import Buttons from './Buttons';

export default function Select({ toggleShow, showIndex, dispatch }) {
    const name = [];

    MI_INDEX.map((item) => { name.push(item["指數"]) })

    function findSelectIndex() {
        const BoardSelect = document.querySelector('#BoardSelect');

        const selectedValues = [].filter
            .call(BoardSelect.options, option => option.selected)
            .map(option => option.text);

        return name.indexOf(selectedValues[0])
    }

    function confirmSelect() {
        const targetIndex = findSelectIndex();
        const isIndexExisting = showIndex.includes(targetIndex);

        if (!isIndexExisting) {
            dispatch({ type: ACTIONS.ADD_CARD, payload: targetIndex })
        } else {
            alert('類股指數已存在')
        }
    }

    return (
        <div className='card'>
            <Options name={name} />
            <Buttons
                confirmSelect={confirmSelect}
                toggleShow={toggleShow}
            />
        </div>
    )
}
