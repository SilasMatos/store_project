import React from 'react'
import PropTypes from 'prop-types'

import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="flex flex-row h-screen ">
      <Sidebar />
      <div className='w-full'>
      <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard
