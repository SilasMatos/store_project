// import React from 'react'

import Banner from '../../components/Banner/Banner'
import Categories from '../../components/Categories/Categories'
import NavBar from '../../components/Navbar/Navbar'
import './Home.css'

export default function Home() {
  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="container" id="container-carousel">
        <Banner />
      </div>

      <div className="container flex justify-center mt-5">
        <Categories />
      </div>
    </>
  )
}
