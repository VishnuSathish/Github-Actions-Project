import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSellers from '../components/BestSellers'
import BottomBanner from '../components/BottomBanner'
import Newsletter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  const handleAddToCart = null
  return (
    <div className='mt-10 '>
      <MainBanner />
      <Categories/>
      <BestSellers  onAddToCart={handleAddToCart}/>
      <BottomBanner/>
      <Newsletter/>
    </div>
  )
}

export default Home