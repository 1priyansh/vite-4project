import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import Products from './Products'
import Footer from './Footer'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Products/>
        <Footer/>
    </>
  )
}

export default Home