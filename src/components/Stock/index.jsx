import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Stock() {
    let { stockId } = useParams()
    let [stockInformation, setStockInformation] = useState(null)
    const flag = (stockId > 1000)

    const url = `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20221128&stockNo=${stockId}`; // origin api url

    useEffect(() => {
        if (flag) {
            axios.get(url)
                .then(response => response.data)
                .then(response => {
                    console.log(response)
                    setStockInformation(response)
                })
            // .then(setTimeout(console.log(stockInformation.data), 2000))
        }
    }, [url])


    return (
        <div className='l-content' >
            {flag && (stockInformation) &&
                <div>
                    No data of Stock Number: {stockId} here.<br />
                    Today's Date: {stockInformation.date}<br />
                    {/* <ul>
                        {stockInformation.data.map(item => (
                            <div>date: {item[0]}</div>
                        ))}
                    </ul> */}
                    {/* Stock Trade: {stockInformation.data[0][0]} */}
                </div>
            }
            {!flag && <div>Please Enter Correct Stock Number. Eg. 2330</div>}
        </div>
    )
}
