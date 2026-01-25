import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaSearch, FaStar } from "react-icons/fa";

function Home() {

  const products = [
  {
    id: 1,
    name: "Drill Machine",
    company: "ToolRentals Inc.",
    pricePerDay: 500,
    rating: 4,
    image: "/tool3.png",
  },
  {
    id: 2,
    name: "Cordless Drill",
    company: "PowerTools Co.",
    pricePerDay: 400,
    rating: 3.5,
    image: "/tool4.png",
  },
  {
    id: 3,
    name: "Angle Grinder",
    company: "BuildMax",
    pricePerDay: 350,
    rating: 4.2,
    image: "/tool2.png",
  },
  {
    id: 4,
    name: "Drill Machine",
    company: "ToolRentals Inc.",
    pricePerDay: 500,
    rating: 4,
    image: "/tool3.png",
  },
  {
    id: 5,
    name: "Cordless Drill",
    company: "PowerTools Co.",
    pricePerDay: 400,
    rating: 3.5,
    image: "/tool4.png",
  },
  {
    id: 6,
    name: "Angle Grinder",
    company: "BuildMax",
    pricePerDay: 350,
    rating: 4.2,
    image: "/tool2.png",
  },
  {
    id: 7,
    name: "Drill Machine",
    company: "ToolRentals Inc.",
    pricePerDay: 500,
    rating: 4,
    image: "/tool3.png",
  },
  {
    id: 8,
    name: "Cordless Drill",
    company: "PowerTools Co.",
    pricePerDay: 400,
    rating: 3.5,
    image: "/tool4.png",
  },
  {
    id: 9,
    name: "Angle Grinder",
    company: "BuildMax",
    pricePerDay: 350,
    rating: 4.2,
    image: "/tool2.png",
  },
];

  const activeRentals = Array(4).fill({
    name: "Drill Machine",
    date: "12th Aug 2023 - 15th Aug 2023",
    company: "ToolRentals Inc.",
    price: "₹500/day",
    image: "/tool1.png",
  });

  return (
    <div className="bg-[#F1F0E9] min-h-screen">
      <Header />
      {/* hero image */}
      <div className="flex justify-center flex-col items-center min-h-96 bg-[url(/hero.png)] bg-cover bg-top-left ">
        <div
          className="text-4xl md:text-6xl font-bold text-[#1C352D] " >
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
        <div className="font-bold text-4xl m-4">Active rentals</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* rental card */}
          {activeRentals.map((item, index) => (
            <div key={index}
              className="flex max-w-2xl shadow-lg rounded-lg bg-white p-4 items-center gap-4" >
              <img
                src={item.image}
                alt="rented tool"
                className="h-24 w-24 object-contain rounded"
              />
              <div className="flex flex-col">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.date}</p>
                <p className="text-sm text-gray-600">{item.company}</p>
              </div>
              <div className="ml-auto flex flex-col items-end">
                <p className="font-semibold text-lg">{item.price}</p>
                <button className="mt-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-500 text-sm">
                  Cancel Rental
                </button>
              </div>
            </div>

          ))}

        </div>
        {/* all rentals button */}
        <div className="items-center flex justify-center m-5">
          <button
            type="button"
            className="bg-[#1C352D] rounded-lg py-2 px-3 font-semibold text-lg shadow-xl text-white" >
            See All Active Rentals...
          </button>
        </div>
      </div>
      {/* featured products */}
      <div id="products" className="bg-[#F1F0E9] shadow-xl">
        <div className="m-4 font-bold text-2xl md:text-4xl">
          Recommended Products
        </div>
        {/* set of cards */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 bg-[#F1F0E9] m-4 p-2 justify-center"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ">

          {/* Duplicate card */}
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 rounded-lg bg-white shadow p-4 flex flex-col"
            >
              <img
                src={product.image}
                alt="tool"
                className="h-40 object-contain mx-auto rounded"
              />

              <h3 className="text-lg font-semibold text-center mt-4">
                {product.name}
              </h3>

              <div className="flex justify-center items-center gap-1 font-semibold">
                {product.rating}/5
                <FaStar className="text-yellow-400" />
              </div>

              <div className="flex items-center justify-between mt-4">
                <p className="text-gray-600 font-medium">{product.pricePerDay}/day</p>
                <button className="px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-gray-700">
                  Rent Now
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
