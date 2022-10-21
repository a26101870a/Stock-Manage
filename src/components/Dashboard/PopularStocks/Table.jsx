import React from "react";
import TableHeader from './TableHeader';
import TableItem from './TableItem';

export default function Table({ data }) {
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