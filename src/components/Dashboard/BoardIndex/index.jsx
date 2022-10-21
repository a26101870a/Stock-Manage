import React, { useReducer } from "react";
import Card from './Card';
import AddCard from './AddCard';
// import ScrollContainer from 'react-indiana-drag-scroll';
import MI_INDEX from 'Data/MI_INDEX.json';

export const ACTIONS = {
    ADD_CARD: 'add-card',
    DELETE_CARD: 'delete-card'
}

function reducer(showIndex, action) {
    switch (action.type) {
        case ACTIONS.ADD_CARD:
            return [...showIndex, action.payload]
        case ACTIONS.DELETE_CARD:
            return showIndex.filter(index => index !== action.payload)
        default:
            return showIndex
    }
}

export default function BoardIndex() {
    const [showIndex, dispatch] = useReducer(reducer, [0, 1])

    return (
        <div className="l-boardIndex boardIndex scroll-container">
            <AddCard
                data={MI_INDEX}
                showIndex={showIndex}
                dispatch={dispatch}
            />
            {showIndex.map((item, index) => (
                <Card
                    key={index}
                    id={item}
                    data={MI_INDEX[item]}
                    dispatch={dispatch}
                />
            ))}
        </div>
    );

}