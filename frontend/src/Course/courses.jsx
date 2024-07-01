import React from 'react'
import Navbar from '../component/Navbar'
import Course from '../component/Course'
import Footer from '../component/Footer'

function courses() {
  return (
      <>
      <div className="min-h-screen dark:bg-slate-900 dark:text-white">
      <Navbar/>
      <div><Course/> </div>
      <Footer/>
      </div>
      </>
  )
}

export default courses