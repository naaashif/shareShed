import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaSearch, FaStar } from "react-icons/fa";

function Home() {
  return (
    <div className=" flex flex-col">
      <Header />
      {/* hero image */}
        <div className="flex justify-center flex-col items-center min-h-96 bg-[url(/hero.png)] bg-cover bg-top-left   ">
          <div
            className="text-4xl md:text-6xl font-bold text-[#1C352D]
         ">
            Welcome back, user
          </div>
          <div className="text-xl md:text-2xl mt-4 font-semibold text-[#1C352D]">
            Rent tools from our trusted providers
          </div>
          {/* search bar */}
          <div className="bg-white border border-white rounded-2xl p-2 flex items-center space-x-4 shadow-2xl mt-6">
            <FaSearch className="w-5 h-5 ml-4 text-slate-700" />
            <input
              type="text"
              placeholder="Search for drills, saws, sanders..."
              className="flex border-none outline-none py-1 w-56 text-black placeholder-slate-700"
            />
            <button className="bg-[#1C352D] text-white px-6 py-1 rounded-xl font-semibold  transition transform hover:scale-105">
              Search
            </button>
          </div>
      </div>
      {/* active rentals */}
      <div className="p-4 bg-[#F1F0E9]">
        <span className="font-bold text-4xl m-4">Active rentals</span>
        <div className="flex h-40 m-4 max-w-100 shadow-lg rounded-lg bg-white">
          <div className="">
            <img className="h-40 rounded-l-lg" src="/tool1.png" alt="tool" />
          </div>
          <div className="flex flex-col  gap-1 m-4 font-semibold">
            <span className="text-2xl font-semibold">name</span>
            <span>date</span>
            <span>company</span>
            <div className="flex justify-center">
              <button className="bg-[#1C352D] text-white rounded-md px-3 py-1">
                manage
              </button>
            </div>
          </div>
        </div>
        <div className="items-center flex w-full justify-center mb-3">
          <button
            type="button"
            className="bg-[#1C352D] rounded-lg py-2 px-3 font-semibold text-lg shadow-xl text-white"
          >
            See All Active Rentals...
          </button>
        </div>
      </div>
      {/* featured products */}
      <div className="bg-[#F1F0E9] shadow-xl">
        <span className="m-6 font-bold text-2xl md:text-4xl">
          Recommended Products
        </span>
        {/* set of cards */}
        <div className="grid grid-cols-1 justify-center sm:grid-cols-3 lg:grid-cols-5 gap-6 bg-[#F1F0E9] m-4 p-2">
          {/* Duplicate card */}
          <div className="w-full max-w-sm p-3 m-4 border border-gray-300 rounded-lg bg-white shadow">
            <img
              src="/tool3.png"
              alt="tools"
              className="h-40 mx-auto rounded"
            />
            <h3 className="text-lg font-semibold text-center mt-4 px-5">
              Drill Machine
            </h3>
            <h3 className="text-md font-semibold text-center flex items-center justify-center">
              4/5 <FaStar style={{ color: "yellow" }} />
            </h3>
            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-600 font-medium">₹500/day</p>
              <button className="px-3 py-1 text-sm bg-gray-800 text-white md:ms-0 rounded hover:bg-gray-700 ms-2">
                Rent Now
              </button>
            </div>
          </div>
          {/* Duplicate card */}
          <div className="w-64 p-4 border border-gray-300 rounded-lg m-5 bg-white">
            <img
              src="/tool3.png"
              alt="tools"
              className="h-40 mx-auto rounded"
            />
            <h3 className="text-lg font-semibold text-center mt-4 px-5">
              Drill Machine
            </h3>
            <h3 className="text-md font-semibold text-center flex items-center justify-center">
              4/5 <FaStar style={{ color: "yellow" }} />
            </h3>
            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-600 font-medium">₹500/day</p>
              <button className="px-3 py-1 text-sm bg-gray-800 text-white md:ms-0 rounded hover:bg-gray-700 ms-2">
                Rent Now
              </button>
            </div>
          </div>
          {/* Duplicate card */}
          <div className="w-64 p-4 border border-gray-300 rounded-lg m-5 bg-white">
            <img
              src="/tool3.png"
              alt="tools"
              className="h-40 mx-auto rounded"
            />
            <h3 className="text-lg font-semibold text-center mt-4 px-5">
              Drill Machine
            </h3>
            <h3 className="text-md font-semibold text-center flex items-center justify-center">
              4/5 <FaStar style={{ color: "yellow" }} />
            </h3>
            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-600 font-medium">₹500/day</p>
              <button className="px-3 py-1 text-sm bg-gray-800 text-white md:ms-0 rounded hover:bg-gray-700 ms-2">
                Rent Now
              </button>
            </div>
          </div>
          {/* Duplicate card */}
          <div className="w-64 p-4 border border-gray-300 rounded-lg m-5 bg-white">
            <img
              src="/tool3.png"
              alt="tools"
              className="h-40 mx-auto rounded"
            />
            <h3 className="text-lg font-semibold text-center mt-4 px-5">
              Drill Machine
            </h3>
            <h3 className="text-md font-semibold text-center flex items-center justify-center">
              4/5 <FaStar style={{ color: "yellow" }} />
            </h3>
            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-600 font-medium">₹500/day</p>
              <button className="px-3 py-1 text-sm bg-gray-800 text-white md:ms-0 rounded hover:bg-gray-700 ms-2">
                Rent Now
              </button>
            </div>
          </div>
          {/* Duplicate card */}
          <div className="w-64 p-4 border border-gray-300 rounded-lg m-5 bg-white">
            <img
              src="/tool3.png"
              alt="tools"
              className="h-40 mx-auto rounded"
            />
            <h3 className="text-lg font-semibold text-center mt-4 px-5">
              Drill Machine
            </h3>
            <h3 className="text-md font-semibold text-center flex items-center justify-center">
              4/5 <FaStar style={{ color: "yellow" }} />
            </h3>
            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-600 font-medium">₹500/day</p>
              <button className="px-3 py-1 text-sm bg-gray-800 text-white md:ms-0 rounded hover:bg-gray-700 ms-2">
                Rent Now
              </button>
            </div>
          </div>
          {/* Duplicate card */}
          <div className="w-64 p-4 border border-gray-300 rounded-lg m-5 bg-white">
            <img
              src="/tool3.png"
              alt="tools"
              className="h-40 mx-auto rounded"
            />
            <h3 className="text-lg font-semibold text-center mt-4 px-5">
              Drill Machine
            </h3>
            <h3 className="text-md font-semibold text-center flex items-center justify-center">
              4/5 <FaStar style={{ color: "yellow" }} />
            </h3>
            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-600 font-medium">₹500/day</p>
              <button className="px-3 py-1 text-sm bg-gray-800 text-white md:ms-0 rounded hover:bg-gray-700 ms-2">
                Rent Now
              </button>
            </div>
          </div>
          {/* Duplicate card */}
          <div className="w-64 p-4 border border-gray-300 rounded-lg m-5 bg-white">
            <img
              src="/tool3.png"
              alt="tools"
              className="h-40 mx-auto rounded"
            />
            <h3 className="text-lg font-semibold text-center mt-4 px-5">
              Drill Machine
            </h3>
            <h3 className="text-md font-semibold text-center flex items-center justify-center">
              4/5 <FaStar style={{ color: "yellow" }} />
            </h3>
            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-600 font-medium">₹500/day</p>
              <button className="px-3 py-1 text-sm bg-gray-800 text-white md:ms-0 rounded hover:bg-gray-700 ms-2">
                Rent Now
              </button>
            </div>
          </div>
          {/* Duplicate card */}
          <div className="w-64 p-4 border border-gray-300 rounded-lg m-5 bg-white">
            <img
              src="/tool3.png"
              alt="tools"
              className="h-40 mx-auto rounded"
            />
            <h3 className="text-lg font-semibold text-center mt-4 px-5">
              Drill Machine
            </h3>
            <h3 className="text-md font-semibold text-center flex items-center justify-center">
              4/5 <FaStar style={{ color: "yellow" }} />
            </h3>
            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-600 font-medium">₹500/day</p>
              <button className="px-3 py-1 text-sm bg-gray-800 text-white md:ms-0 rounded hover:bg-gray-700 ms-2">
                Rent Now
              </button>
            </div>
          </div>
          {/* Duplicate card */}
          <div className="w-64 p-4 border border-gray-300 rounded-lg m-5 bg-white">
            <img
              src="/tool3.png"
              alt="tools"
              className="h-40 mx-auto rounded"
            />
            <h3 className="text-lg font-semibold text-center mt-4 px-5">
              Drill Machine
            </h3>
            <h3 className="text-md font-semibold text-center flex items-center justify-center">
              4/5 <FaStar style={{ color: "yellow" }} />
            </h3>
            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-600 font-medium">₹500/day</p>
              <button className="px-3 py-1 text-sm bg-gray-800 text-white md:ms-0 rounded hover:bg-gray-700 ms-2">
                Rent Now
              </button>
            </div>
          </div>
          {/* Duplicate card */}
          <div className="w-64 p-4 border border-gray-300 rounded-lg m-5 bg-white">
            <img
              src="/tool3.png"
              alt="tools"
              className="h-40 mx-auto rounded"
            />
            <h3 className="text-lg font-semibold text-center mt-4 px-5">
              Drill Machine
            </h3>
            <h3 className="text-md font-semibold text-center flex items-center justify-center">
              4/5 <FaStar style={{ color: "yellow" }} />
            </h3>
            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-600 font-medium">₹500/day</p>
              <button className="px-3 py-1 text-sm bg-gray-800 text-white md:ms-0 rounded hover:bg-gray-700 ms-2">
                Rent Now
              </button>
            </div>
          </div>
          {/* Duplicate card */}
          <div className="w-64 p-4 border border-gray-300 rounded-lg m-5 bg-white">
            <img
              src="/tool3.png"
              alt="tools"
              className="h-40 mx-auto rounded"
            />
            <h3 className="text-lg font-semibold text-center mt-4 px-5">
              Drill Machine
            </h3>
            <h3 className="text-md font-semibold text-center flex items-center justify-center">
              4/5 <FaStar style={{ color: "yellow" }} />
            </h3>
            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-600 font-medium">₹500/day</p>
              <button className="px-3 py-1 text-sm bg-gray-800 text-white md:ms-0 rounded hover:bg-gray-700 ms-2">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
