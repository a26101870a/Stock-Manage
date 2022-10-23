import React, { useEffect, useState } from "react";
import Title from "./Title";
import Price from "./Price";
import Trend from "./Trend";
import Toggle from "./Toggle";

export default function TableItem({
    data,
    ready,
    addStock, removeStock,
    addToList, removeFromList
}) {
    const [readyToBuy, setReadyToBuy] = useState(ready)

    function toggleReadyToBuy() {
        setReadyToBuy(prevState => !prevState)

        if (!readyToBuy) {
            addStock({
                number: data['Code'],
                name: data['Name'],
                price: parseFloat(data['ClosingPrice'])
            })
            addToList(data['Code'])
        } else {
            removeStock({ number: data['Code'] })
            removeFromList(data['Code'])
        }
    }

    return (
        <tr className="listItem ">
            <Title
                name={data['Name']}
                code={data['Code']}
            />
            <Price data={data} />
            <Trend trend={data['Change']} />
            <Toggle
                ready={ready}
                toggleReadyToBuy={toggleReadyToBuy}
            />
        </tr>
    );
};