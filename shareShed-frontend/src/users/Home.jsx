import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <div className='min-h-screen flex flex-col'>
                <Header />
                <h1 className='flex-1 bg-[#F1F0E9]' >home</h1>
                <Footer />
            </div>
        </>
    )
}

export default Home