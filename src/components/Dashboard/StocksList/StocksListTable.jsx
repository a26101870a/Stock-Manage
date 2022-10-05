import React from "react";
import StocksListTableHeader from 'Components/Dashboard/StocksList/StocksListTableHeader';
import StocksListItem from 'Components/Dashboard/StocksList/StocksListItem';
import STOCK_DAY_ALL from 'Data/STOCK_DAY_ALL.json';

const StocksListTable = (props) => {
    var data = STOCK_DAY_ALL;

    return (
        <div className="stocksList__content">
            <table style={{ width: 100 + '%' }}>
                <thead><StocksListTableHeader /></thead>
                <tbody className="stocksList__items">
                    {data
                        .filter((item) => {
                            let filter = props.filterValue;
                            if (!filter) return true;

                            let code = item['Code'];
                            let name = item['Name'];

                            return (code.startsWith(filter) || name.startsWith(filter));
                        })
                        .map((item, index) => (
                            <StocksListItem data={item} key={index} />
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default StocksListTable;