import React, { useState, useEffect } from "react";
import Topbar from './Topbar'
import Content from './Content'
import MI_5MINS_HIST from 'Data/MI_5MINS_HIST.json'

export default function Analytics() {
    return (
        <div className="l-analytics analytics" >
            <Topbar />
            <Content data={MI_5MINS_HIST.data} />
        </div>
    );

};