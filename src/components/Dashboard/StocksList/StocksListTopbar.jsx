import React from "react";
import SearchBar from 'Components/Dashboard/StocksList/SearchBar';

const StocksListTopbar = (props) => {
    return (
        <div className='stocksList__topbar'>
            <div className='stocksList__title'>Stocks List</div>
            <SearchBar filterValue={props.filterValue} setFilterValue={props.setFilterValue} />
        </div>
    );
}

export default StocksListTopbar;