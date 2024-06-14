import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Notfoundpage from './Notfoundpage'
import Product from './Product'
import PrivateRoute from './PrivateRoute'
import Description from './Description'
import Login from './Login'
import { Button } from 'react-bootstrap'

const Allroutes = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    <Route path='/product' element={
    <PrivateRoute>
    <Product />
    </PrivateRoute>
    }></Route>
    <Route path='/description/:id' element={<Description />}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='*' element={<Notfoundpage />}></Route>
  </Routes>
    </div>
  )
}

export default Allroutes
