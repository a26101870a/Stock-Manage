import React, { useState, useEffect } from "react";
import BoardIndexCard from './BoardIndexCard'
import ScrollContainer from 'react-indiana-drag-scroll'
import MI_INDEX from 'Data/MI_INDEX.json'

export default function BoardIndex({ date }) {
    const showIndex = [1, 2, 16, 17, 18, 19, 44,];
    const [boardIndex, setBoardIndex] = useState(null);

    useEffect(() => {
        fetch(`https://www.twse.com.tw/exchangeReport/MI_INDEX?response=json&date=${date}&type=IND`)
            .then(response => response.json())
            .then(json => setBoardIndex(json))
    }, [])

    if (boardIndex === null) {
        return (
            <ScrollContainer className="l-boardIndex boardIndex scroll-container">
                {showIndex.map((item, index) => (
                    <BoardIndexCard data={MI_INDEX.data1[item]} key={index} />
                ))}
            </ScrollContainer>
        );
    }
    return (
        <ScrollContainer className="l-boardIndex boardIndex scroll-container">
            {showIndex.map((item, index) => (
                <BoardIndexCard data={boardIndex.data1[item]} key={index} />
            ))}
        </ScrollContainer>
    );
}