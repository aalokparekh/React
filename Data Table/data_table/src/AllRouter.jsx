import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import PostData from './component/PostData'
import PutData from './component/PutData'

const AllRouter = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/post' element={<PostData />}></Route>
        <Route path='/put/:id' element={<PutData />}></Route>
        </Routes>
    </div>
  )
}

export default AllRouter
