import React, { useState } from "react";
import Topbar from './TopBar';
import Table from './Table';

export default function StocksList() {
    let [filterValue, setFilterValue] = useState('');

    return (
        <div className="l-stocksList stocksList" >
            <Topbar
                filterValue={filterValue}
                setFilterValue={setFilterValue}
            />
            <Table filterValue={filterValue} />
        </div>
    );
};