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
        <a href='/' className='text-3xl text-white font-semibold'>ShareShed</a>
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
            <div className="absolute top-20 left-0 w-full flex flex-col items-center py-4 gap-4 z-50 shadow-lg md:hidden">
              <Link to="/products" className='text-[#1C352D] font-bold text-lg' onClick={() => setHamburgButton(false)}>Products</Link>
              <Link to="/contact" className='text-[#1C352D] font-bold text-lg' onClick={() => setHamburgButton(false)}>Contact Us</Link>
              <Link to="/login" className='text-[#1C352D] font-bold text-lg' onClick={() => setHamburgButton(false)}>Log In</Link>
            </div>
          )}
        </div>
        <div className="hidden md:flex text-white items-center gap-3 m-3 text-lg font-semibold">
          <button className='bg-white text-[#1C352D] rounded px-3 py-1'>Products</button>
          <button className='bg-white text-[#1C352D] rounded px-3 py-1'>Contact Us</button>
          <Link className='border rounded-lg px-3 py-1' to={'/login'}>Log In</Link>
        </div>
      </div>
    </div>
  )
}

export default Header