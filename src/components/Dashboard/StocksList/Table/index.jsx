import React from "react";
import Header from './Header';
import Body from "Containers/StockList/StocokList_TableBody";

export default function Table({ filterValue }) {
    return (
        <div className="stocksList_content">
            <table style={{ width: 100 + '%' }}>
                <thead>
                    <Header />
                </thead>
                <tbody className="stocksList_items">
                    <Body filterValue={filterValue} />
                </tbody>
            </table>
        </div>
    );
}