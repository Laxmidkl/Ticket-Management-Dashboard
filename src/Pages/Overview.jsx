import React from 'react'
import OverviewHeader from '../PageComponents/Overview/OverviewHeader'
import OverviewCharts from '../PageComponents/Overview/OverviewCharts'
import OverviewTable from '../PageComponents/Overview/OverviewTable'

const Overview = () => {
  return (
    <div>
        <OverviewHeader/>
        <OverviewCharts/>
        <OverviewTable/>
    </div>
  )
}

export default Overview