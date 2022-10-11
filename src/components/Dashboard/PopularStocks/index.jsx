import React from "react";
import Topbar from './Topbar';
import Table from "./Table";

export default function PopularStocks() {
    return (
        <div className="l-popularStocks popularStocks" >
            <Topbar />
            <Table />
        </div>
    );
};