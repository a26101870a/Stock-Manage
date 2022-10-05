import React from "react";
import AnalyticsTopbar from 'Components/Dashboard/Analytics/AnalyticsTopbar'
import AnalyticsContent from 'Components/Dashboard/Analytics/AnalyticsContent'

const Analytics = (props) => {
    return (<div className="l-analytics analytics" >
        <AnalyticsTopbar />
        <AnalyticsContent />
    </div>);
};

export default Analytics;