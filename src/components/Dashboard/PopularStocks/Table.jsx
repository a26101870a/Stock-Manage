import React from "react";
import TableHeader from './TableHeader';
import TableItem from './TableItem';
import MI_INDEX20 from 'Data/MI_INDEX20.json';

export default function Table() {
    var data = MI_INDEX20.data;

    return (
        <div className="popularStocks__content">
            <table style={{ width: 100 + '%' }}>
                <thead><TableHeader /></thead>
                <tbody className="popularStocks__items">
                    {data.map((item, index) => (
                        <TableItem data={item} key={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}