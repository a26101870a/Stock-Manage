import React from 'react'
import STOCK_DAY_ALL from 'Data/STOCK_DAY_ALL.json';
import Item from 'Containers/StockList/StockList_TableItem';

export default function List({ pointerList, filterValue }) {
    let data = STOCK_DAY_ALL;

    return (
        <>
            {data
                .filter((item) => {
                    let filter = filterValue;
                    if (!filter) return true;

                    let code = item['Code'];
                    let name = item['Name'];

                    return (code.startsWith(filter) || name.startsWith(filter));
                })
                .map((item, index) => (
                    <Item
                        key={index}
                        data={item}
                        isBuying={(pointerList.includes(item['Code']))}
                    />
                ))}
        </>
    )
}
