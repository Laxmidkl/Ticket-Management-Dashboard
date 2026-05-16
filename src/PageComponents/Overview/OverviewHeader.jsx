import React from 'react'
import PageHeader from '../../Component/PageHeader'

const OverviewHeader = () => {
  return (
    <div>
           <div>
      <PageHeader
        title="Dashboard Overview"
        breadcrumbs={["Apps", "Dashboard"]}
      />
      </div>
    </div>
  )
}

export default OverviewHeader