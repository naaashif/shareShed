import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>
      <div className="flex-1  items-center text-center text-5xl ">
        welcome user
      </div>
      <Footer/>
    </div>
  )
}

export default Home