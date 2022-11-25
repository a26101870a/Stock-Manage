import React, { useState } from "react";
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
    // If isBuying us true, we set this stock is readyToBuy in stock list,
    // and is existing in buy list, and the icon will be green.
    const [readyToBuy, setReadyToBuy] = useState(isBuying)

    function toggleReadyToBuy() {
        setReadyToBuy(prevState => !prevState)

        if (!readyToBuy) {
            addToBuyList({
                code: data['Code'],
                name: data['Name'],
                price: parseFloat(data['ClosingPrice'])
            })
            addToStockList({ code: data['Code'] })
        } else {
            removeFromBuyList({ code: data['Code'] })
            removeFromStockList({ code: data['Code'] })
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