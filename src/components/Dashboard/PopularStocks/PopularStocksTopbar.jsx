import React from "react";

const PopularStocksTopbar = () => {
    return (
        <div className='popularStocks__topbar'>
            <div className='popularStocks__title'>Popular Stocks</div>
            <div className="popularStocks__select">
                <select name="popularSelet" id="popularSelet">
                    <option value="Today">Today</option>
                    <option value="Week">Week</option>
                    <option value="Month">Month</option>
                    <option value="Year">Year</option>
                </select>
            </div>
        </div>
    );
}

export default PopularStocksTopbar;