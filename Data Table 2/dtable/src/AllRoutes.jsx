import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'
import ProductDetails from './components/ProductDetails'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProductList/>}></Route>
        <Route path='/productlist' element={<AddProduct />}></Route>
        <Route path='/put/:id' element={<EditProduct /> }></Route>
        <Route path='/productdetail/:id' element={<ProductDetails />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
