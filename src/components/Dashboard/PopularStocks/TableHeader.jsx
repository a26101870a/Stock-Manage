import React from "react";

export default function TableHeader() {
    return (
        <tr className='popularItem popularItem__names '>
            <th className='popularItem__title'>Name</th>
            <th className='popularItem__price'>Price</th>
            <th className='popularItem__trend'>Trend</th>
        </tr >
    );
}