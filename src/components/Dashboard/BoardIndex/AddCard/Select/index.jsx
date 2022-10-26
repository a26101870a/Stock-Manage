import React from 'react'
import MI_INDEX from 'Data/MI_INDEX.json';
import Options from './Options';
import Buttons from './Buttons';

export default function Select({ toggleShow, pointerList, addToboardList }) {
    let optionsNames = [];

    MI_INDEX.map((item) => { optionsNames.push(item["指數"]) })

    function findSelectIndex() {
        const BoardSelect = document.querySelector('#BoardSelect');

        const selectedValues = [].filter
            .call(BoardSelect.options, option => option.selected)
            .map(option => option.text);

        return optionsNames.indexOf(selectedValues[0])
    }

    function confirmSelect() {
        const targetIndex = findSelectIndex();
        const isIndexExisting = pointerList.includes(targetIndex);

        if (!isIndexExisting) {
            addToboardList(targetIndex)
        } else {
            alert('類股指數已存在')
        }
    }

    return (
        <div className='card'>
            <Options optionsNames={optionsNames} />
            <Buttons
                confirmSelect={confirmSelect}
                toggleShow={toggleShow}
            />
        </div>
    )
}
