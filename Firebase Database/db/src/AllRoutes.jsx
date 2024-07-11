import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Privateroutes from './component/Privateroutes'
import Dashboard from './component/Dashboard'

const AllRoutes = () => {
  return (
    <div>
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={
      <Privateroutes>
      <Dashboard />
      </Privateroutes>
      } />
   
    </Routes>
    </div>
  )
}

export default AllRoutes
