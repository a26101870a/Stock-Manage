import React from "react";
import MI_INDEX20 from 'Data/MI_INDEX20.json';
import Header from './Header';
import Item from './Item';

export default function Table() {
    let tableStyle = { width: 100 + '%' }
    return (
        <div className="popular_content">
            <table style={tableStyle}>
                <thead>
                    <Header />
                </thead>
                <tbody className="popular_items">
                    {MI_INDEX20.map((item, index) => (
                        <Item data={item} key={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}