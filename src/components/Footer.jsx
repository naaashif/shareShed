import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-[#1C352D] text-white md:pb-1 pb-5'>
      <div className='flex flex-col md:flex-row justify-around p-10 gap-8'>
        {/* ShareShed Section */}
        <div className="flex flex-col space-y-3 mt-10 md:mt-2">
          <h2 className='text-3xl font-medium'>ShareShed</h2>
          <Link to='/user/allProducts' className='text-lg font-light hover:text-amber-400 transition-colors'>
            Our Products
          </Link>
          <Link to='/distributors' className='text-lg font-light hover:text-amber-400 transition-colors'>
            Become a Distributor
          </Link>
          <Link to='/referUs' className='text-lg font-light hover:text-amber-400 transition-colors'>
            Refer Us
          </Link>
        </div>

        {/* Help Section */}
        <div className="flex flex-col space-y-3 mt-10 md:mt-2">
          <h2 className='text-2xl font-medium'>Help</h2>
          <Link to='/contact' className='text-lg font-light hover:text-amber-400 transition-colors'>
            Contact Us
          </Link>
          <Link to='/faq' className='text-lg font-light hover:text-amber-400 transition-colors'>
            FAQs
          </Link>
          <Link to='/contact' className='text-lg font-light hover:text-amber-400 transition-colors'>
            Support
          </Link>
        </div>

        {/* About Section */}
        <div className="flex flex-col mt-10 md:mt-2 max-w-xs">
          <h2 className='text-2xl font-medium mb-3'>About</h2>
          <p className='text-base leading-relaxed'>
            ShareShed makes renting tools simple and convenient.
            Find the right tools from trusted providers without the need to buy.
            Choose your dates, send a rental request, and communicate easily if needed.
            Get the job done with the tools you need, right when you need them.
          </p>
        </div>

        {/* Subscribe Section */}
        <div className="mt-10 md:mt-2">
          <h2 className='font-semibold text-xl mb-4'>Subscribe to Us</h2>
          <form className='flex' onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder='example@gmail.com' 
              className='text-black bg-slate-200 rounded-l placeholder-slate-400 px-4 py-2 border-none focus:outline-none focus:ring-2 focus:ring-amber-400' 
              required
              aria-label="Email for newsletter"
            />
            <button 
              type="submit"
              className='bg-amber-400 px-4 py-2 rounded-r hover:bg-amber-500 transition-colors font-medium text-[#1C352D]'
            >
              Subscribe
            </button>
          </form>
          
          {/* Social Media Links */}
          <div className="mt-5 flex gap-4 text-3xl">
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram fontSize="inherit" />
            </a>
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin fontSize="inherit" />
            </a>
            <a 
              href="https://www.github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub fontSize="inherit" />
            </a>
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook fontSize="inherit" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between md:flex-row flex-col space-y-4 md:space-y-0 items-center px-5 pt-5 border-t border-gray-600">
        <div>
          <p className="text-sm">&copy; 2026 ShareShed Inc. All rights reserved.</p>
        </div>
        <div className="text-slate-400 text-sm flex gap-6 md:me-7">
          <Link to="/policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white transition-colors">
            Terms and Conditions
          </Link>
          <Link 
            to="/developers" className="hover:text-white transition-colors"
          >
            Developers
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer