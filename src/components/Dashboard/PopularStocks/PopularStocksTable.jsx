import React from "react";
import PopularStocksTableHeader from 'Components/Dashboard/PopularStocks/PopularStocksTableHeader';
import PopularStocksItem from 'Components/Dashboard/PopularStocks/PopularStocksItem';
import MI_INDEX20 from 'Data/MI_INDEX20.json';

const PopularStocksTable = () => {
    var data = MI_INDEX20.data;

    return (
        <div className="popularStocks__content">
            <table style={{ width: 100 + '%' }}>
                <thead><PopularStocksTableHeader /></thead>
                <tbody className="popularStocks__items">
                    {data.map((item, index) => (
                        <PopularStocksItem data={item} key={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PopularStocksTable;