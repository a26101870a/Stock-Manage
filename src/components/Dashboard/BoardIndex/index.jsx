import React from "react";
import MI_INDEX from 'Data/MI_INDEX.json';
import Card from './Card';
import AddCard from './AddCard';

export default function BoardIndex({
    pointerList,
    addToboardList,
    removeFromboardList
}) {
    return (
        <div className="l-boardIndex boardIndex scroll-container">
            <AddCard
                pointerList={pointerList}
                addToboardList={addToboardList}
            />
            {pointerList.map((item, index) => (
                <Card
                    key={index}
                    id={item}
                    data={MI_INDEX[item]}
                    removeFromboardList={removeFromboardList}
                />
            ))}
        </div>
    );

}