import React from "react";
import BoardIndexCard from 'Components/Dashboard/BoardIndex/BoardIndexCard'
import ScrollContainer from 'react-indiana-drag-scroll'
import MI_INDEX from 'Data/MI_INDEX'

const BoardIndex = (props) => {
    const showIndex = [1, 2, 16, 17, 18, 19, 44,]

    return (
        <ScrollContainer className="l-boardIndex boardIndex scroll-container">
            {showIndex.map((item, index) => (
                <BoardIndexCard data={MI_INDEX.data1[item]} key={index} />
            ))}
        </ScrollContainer>
    );
};

export default BoardIndex;