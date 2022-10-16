import React from "react";
import SearchBar from 'Components/Dashboard/StocksList/SearchBar';

export default function Topbar({ filterValue, setFilterValue }) {
    return (
        <div className='stocksList__topbar'>
            <div className='stocksList__title'>Stocks List</div>
            <SearchBar filterValue={filterValue} setFilterValue={setFilterValue} />
        </div>
    );
};