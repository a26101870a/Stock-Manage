import React from "react";
import Header from './Header';
import Body from "./Body";

export default function Table({ filterValue, toBuyList }) {
    return (
        <div className="stocksList_content">
            <table style={{ width: 100 + '%' }}>
                <thead>
                    <Header />
                </thead>
                <tbody className="stocksList_items">
                    <Body
                        toBuyList={toBuyList}
                        filterValue={filterValue}
                    />
                </tbody>
            </table>
        </div>
    );
}