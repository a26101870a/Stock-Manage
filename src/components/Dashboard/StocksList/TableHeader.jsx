import React from "react";

export default function TableHeader() {
    return (
        <tr className='listItem listItem__names '>
            <th className='listItem__title'>Name</th>
            <th className='listItem__opening'>OpeningPrice</th>
            <th className='listItem__closing'>ClosingPrice</th>
            <th className='listItem__highest'>HighestPrice</th>
            <th className='listItem__lowest'>LowestPrice</th>
            <th className='listItem__trend'>Trend</th>
            <th className='listItem__add'></th>
        </tr>
    );
};