import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';



function Footer() {
  return (
    <div className='bg-[#1C352D] text-white'>
      <div className='flex flex-col md:flex-row justify-around p-10 '>
        <div className=" flex flex-col space-y-3 mt-10 md:mt-2">
          <h1 className='text-3xl font-medium'>ShareShed</h1>
          <a href='/products' className='text-lg font-light'>Our Products</a>
          <a href='/distributers' className='text-lg font-light'>Distributers</a>
          <a href='/' className='text-lg font-light'> Refer Us</a>

        </div>
        <div className="flex flex-col space-y-3 mt-10 md:mt-2">
          <h1 className='text-2xl font-medium'>Help</h1>
          <a href='/products' className='text-lg font-light'>Contact Us</a>
          <a href='/distributers' className='text-lg font-light'>FAQs</a>
          <a href='/' className='text-lg font-light'> </a>
        </div>
        <div className="flex flex-col mt-10 md:mt-2">
          <h1 className='text-2xl font-medium'>About</h1>
          <span className='w-62'>ShareShed makes renting tools simple and convenient.
            Find the right tools from trusted providers without the need to buy.
            Choose your dates, send a rental request, and communicate easily if needed.
            Get the job done with the tools you need, right when you need them.</span>

        </div>
        <div className="mt-10 md:mt-2">
          <div className="font-semibold text-xl">Subscribe to Us</div>
          <div className='flex mt-4'>
            <input type="email" placeholder='example@gmail.com' className='text-black bg-slate-200 rounded-l placeholder-slate-400 px-4 py-1 border-none' />
            <button className='bg-amber-400 px-3 py-1 rounded-r'>Subscribe</button>
          </div>
          <div className="mt-5 text-3xl space-x-2 ms-4">
            <a href="https://www.instagram.com"> <InstagramIcon /> </a>
            <a href="https://www.linkedin.com"> <LinkedInIcon /> </a>
            <a href="https://www.github.com"> <GitHubIcon /> </a>
            <a href="https://www.facebook.com"> <FacebookIcon /> </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between md:flex-row flex-col space-y-4 items-center">
        <div className="ms-5">
          <h1>&copy;2026 ShareShed inc. All rights reserved.</h1>
        </div>
        <div className="text-slate-500 text-sm gap-4 flex md:me-12">
          <a href="">Privacy Policy</a>
          <a href="/login">Terms and Conditions</a>
          <a href="https://www.github.com/nashift">Developers</a>
        </div>
      </div>
    </div>
  )
}

export default Footer