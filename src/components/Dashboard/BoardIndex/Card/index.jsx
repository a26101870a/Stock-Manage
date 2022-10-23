import React from 'react';
import { ACTIONS } from '../index';
import Topbar from './Topbar';
import Content from './Content';

export default function Card({ id, data, dispatch }) {
    function deleteIndex() {
        dispatch({ type: ACTIONS.DELETE_CARD, payload: id })
    }

    return (
        <div className='card'>
            <Topbar
                title={data['指數']}
                deleteIndex={deleteIndex}
            />
            <Content
                closingIndex={data['收盤指數']}
                trend={data['漲跌']}
                trendPercent={data['漲跌百分比']}
            />
        </div>
    );
}