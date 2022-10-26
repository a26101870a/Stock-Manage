import React, { useEffect, useState } from "react";
import Title from "./Title";
import Price from "./Price";
import Trend from "./Trend";
import Toggle from "./Toggle";

export default function TableItem({
    data,
    isBuying,
    addToBuyList,
    removeFromBuyList,
    addToStockList,
    removeFromStockList
}) {
    const [readyToBuy, setReadyToBuy] = useState(isBuying)

    function toggleReadyToBuy() {
        setReadyToBuy(prevState => !prevState)

        if (!readyToBuy) {
            addToBuyList({
                number: data['Code'],
                name: data['Name'],
                price: parseFloat(data['ClosingPrice'])
            })
            addToStockList(data['Code'])
        } else {
            removeFromBuyList({ number: data['Code'] })
            removeFromStockList(data['Code'])
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
                isBuying={isBuying}
                toggleReadyToBuy={toggleReadyToBuy}
            />
        </tr>
    );
};