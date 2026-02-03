import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
      <Header />
      <div
        className="flex justify-center items-center"
        style={{
          minHeight: "50vh",
          backgroundImage: `url(/hero.png)`,
          backgroundSize: "cover",
          backgroundPosition: "left top",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="flex flex-col w-96 md:w-full max-w-lg bg-white/35 rounded-xl p-8
                         text-center items-center justify-around backdrop-blur-sm"
        >
          <h1 className="text-3xl font-bold text-[#1C352D] z-10">
            Rent Smarter, Not Harder
          </h1>
          <p className="p-3 font-medium">
            Find and rent the right tools without the hassle of buying.
            Simple, convenient, and reliable, it helps you get your work done
            whenever you need it.
          </p>
          <Link
            to={"/login"}
            className="bg-[#1C352D] w-fit px-4 py-3 text-white font-semibold text-lg rounded-xl"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="min-h-96 py-12 px-6 bg-[#F1F0E9]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-[#1C352D] mb-12">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            {/* About Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-[#1C352D] mb-4">About Us</h2>
              <p className="text-gray-700 leading-relaxed">
                We're a platform dedicated to making tool rental simple and accessible. 
                Whether you need equipment for a day or a month, we connect you with 
                the right tools at the right time, saving you money and storage space.
              </p>
            </div>

            {/* Support Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-[#1C352D] mb-4">Support</h2>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-semibold">Email:</p>
                  <a href="mailto:nashif104@gmail.com" className="text-blue-600 hover:underline">
                    support@renttools.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold">Phone:</p>
                  <a href="tel:+918590319905" className="text-blue-600 hover:underline">
                    +91 8590319905
                  </a>
                </div>
                <div>
                  <p className="font-semibold">Hours:</p>
                  <p>Mon-Fri, 9AM-6PM</p>
                </div>
              </div>
            </div>

            {/* Developers Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-[#1C352D] mb-4">Developers</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800">Nashif</p>
                  <p className="text-sm text-gray-600">Lead Developer</p>
                  <a href="mailto:nashif104@gmail.com" className="text-sm text-blue-600 hover:underline">
                    nashif@mail.com
                  </a>
                </div>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800"> Shaheer Shaz</p>
                  <p className="text-sm text-gray-600">Full Stack Developer</p>
                  <a href="mailto:shaheershaz2004@gmail.com" className="text-sm text-blue-600 hover:underline">
                    shaheer@mail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact