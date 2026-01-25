import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [hamburgButton, setHamburgButton] = useState(false)
  console.log(hamburgButton);


  return (
    <div className='bg-[#1C352D] flex justify-between items-center' style={{ height: '80px' }} >
      <div className="flex items-center m-8">
        <a href='/' className='text-3xl text-white font-semibold flex items-center gap-3'>
        <img height={35} width={35} src="/logo.png" alt="logo" className='' />
        ShareShed</a>
      </div>
      <div className='flex'>
        <div className='flex flex-col'>
          <div className='flex md:hidden p-5'>
            <button onClick={() => setHamburgButton(!hamburgButton)} className='text-white' >
              {hamburgButton ? <CloseIcon sx={{ fontSize: "40px" }} /> : <MenuIcon sx={{ fontSize: "40px" }} />}
            </button>
          </div>
          {/* Mobile Dropdown Menu */}
          {hamburgButton && (
            <div className="bg-[#F1F0E9]/70  absolute top-20 left-0 w-full flex flex-col text-center items-center py-4 gap-4 z-50 shadow-lg md:hidden">
              <Link to="/products" className='text-[#1C352D] font-bold text-lg w-full' onClick={() => setHamburgButton(false)}>Products</Link>
              <Link to="/contact" className='text-[#1C352D] bg-[#F1F0E9] py-2 w-full  font-bold text-lg' onClick={() => setHamburgButton(false)}>Contact Us</Link>
              <Link to="/login" className='text-[#1C352D] font-bold text-lg w-full' onClick={() => setHamburgButton(false)}>Log In</Link>
            </div>
          )}
        </div>
        <div className="hidden md:flex text-white items-center gap-3 m-3 text-lg font-semibold">
          <Link to={"/products"} className='bg-white text-[#1C352D] rounded px-3 py-1'>Products</Link>
          <Link to={'/contact'} className='bg-white text-[#1C352D] rounded px-3 py-1'>Contact Us</Link>
          <Link to={'/login'} className='border rounded-lg px-3 py-1' >Log In</Link>
        </div>
      </div>
    </div>
  )
}

export default Header