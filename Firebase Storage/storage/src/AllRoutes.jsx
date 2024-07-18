import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'
import Dashboard from './Components/Dashboard'
import Post from './Components/Post'
import PostwithFormik from './Components/PostwithFormik'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }></Route>
        <Route  path="/post"
        element={
          <PrivateRoute>
            <Post />
          </PrivateRoute>
        }></Route>
        <Route  path="/postwithformik"
        element={
          <PrivateRoute>
            <PostwithFormik />
          </PrivateRoute>
        }></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
