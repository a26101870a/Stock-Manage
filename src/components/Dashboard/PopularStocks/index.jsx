import React, { useState, useEffect } from "react";
import Topbar from './Topbar';
import Table from "./Table";
import MI_INDEX20 from 'Data/MI_INDEX20.json'

export default function PopularStocks() {
    return (
        <div className="l-popularStocks popularStocks" >
            <Topbar />
            <Table data={MI_INDEX20.data} />
        </div>
    );

};