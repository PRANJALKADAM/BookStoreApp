import React from 'react'
import Navbar from '../component/Navbar'
import MainPage from '../component/MainPage'
import FreeBooks from '../component/FreeBooks'
import Footer from '../component/Footer'

function Home() {
  return (
    <>
    <div className="min-h-screen dark:bg-slate-900 dark:text-white">
    <Navbar></Navbar>
      <MainPage></MainPage>
      <FreeBooks></FreeBooks>
      <Footer></Footer>
    </div>
    </>
  )
}

export default Home