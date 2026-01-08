import React from 'react'
import NavBar from './components/NavBar'
import {Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext'
import Login from './components/Login'
import AllProducts from './pages/AllProducts'
import ProductCategory from './pages/ProductCategory' 
import Cart from './pages/Cart'
import MyOrders from './pages/MyOrders'
import SellerLogin from './components/Seller/SellerLogin'
import SellerLayout from './pages/Seller/SellerLayout'
import AddProducts from './pages/Seller/AddProducts'
import ProductsList from './pages/Seller/ProductsList'
import Orders from './pages/Seller/Orders'

const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller")
  const {showUserLogin, isSeller}= useAppContext()

  return (
    <div>
      {isSellerPath ? null : <NavBar />}
      {showUserLogin? <Login/>:null}
      <Toaster/>
    <div  className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px32"} `} >
      <Routes>
        <Route path='/'element={<Home/>} />
        
        <Route path='/products' element={<AllProducts/>} />
         <Route path='/products/:category' element={<ProductCategory/>} />
         <Route path='/cart' element={<Cart/>} />
         <Route path='/my-orders' element={<MyOrders/>} />
         <Route path='/seller' element={isSeller ? <SellerLayout/> : <SellerLogin/>} >
         <Route index element={isSeller? <AddProducts/> :null} />
         <Route path='product-list' element={isSeller? <ProductsList/> :null} />
         <Route path='orders' element={isSeller? <Orders/> :null} />
         </Route>
      </Routes>
      </div>
      {isSellerPath ? null :  <Footer/>}
      </div>
  )
}

export default App