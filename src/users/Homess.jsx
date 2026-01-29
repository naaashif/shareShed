import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaSearch, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Homess() {

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* rental card */}
          {activeRentals.slice(0, 3).map((item, index) => (
            <div className="h-40 md:h-32 grid grid-cols-[auto_1fr_auto] gap-4 shadow-lg rounded-lg bg-white items-center ">
              {/* Image */}
              <div className="w-40 h-40 md:w-32 md:h-32 flex items-center justify-center border border-gray-300 bg-gray-100 rounded-lg shrink-0 ">
                <img
                  src={item.image}
                  alt="rented tool"
                  className="max-w-full max-h-full object-contain rounded-l-lg"
                />
              </div>

              {/* Details */}
              <div className="flex justify-between flex-col md:flex-row gap-2 p-4">

                <div className="min-w-0">
                  <h3 className="font-semibold truncate">{item.name}</h3>
                  <p className="text-sm text-gray-600 truncate">{item.date}</p>
                  <p className="text-sm text-gray-600 truncate">{item.company}</p>
                </div>

                {/* Action */}
                <div className="flex flex-col justify-center  md:items-end gap-2">
                  <p className="font-semibold px-3">{item.price}</p>
                  <button className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-400 w-fit">
                    view more
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
        {/* all rentals button */}
        {activeRentals.length > 3 &&
          <div className="items-center flex justify-center m-5">
            <Link to={'/user/activeRentals'}
              className="bg-[#1C352D] rounded-lg py-2 px-3 font-semibold text-lg shadow-xl text-white" >
              See All Active Rentals...
            </Link>
          </div>}
      </div>
      {/* featured products */}
      <div id="products" className="bg-[#F1F0E9] shadow-xl">
        <div className="flex  items-center">
          <h1 className="ms-6  font-bold text-2xl md:text-4xl">Recommended Products</h1>
          <Link to={'/user/products'} className="ms-6 bg-[#1C352D] rounded-lg py-2 px-3 font-semibold text-lg shadow-xl text-white">
          view All </Link>
        </div>
        {/* set of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ">
          {/* Duplicate card */}
          {products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="h-44 border border-gray-300 rounded-lg bg-white flex gap-4"
            >
              <div className="w-44 h-44">
                <img
                  src={product.image}
                  alt="tool"
                  className="max-w-full max-h-full object-contain rounded-l-lg"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mt-4">
                  {product.name}
                </h3>
                <h3 className="text-md font-semibold mt-1">
                  {product.company}
                </h3>
                <p className="flex items-center gap-1">
                  {product.rating}/5
                  <FaStar className="text-yellow-400" />
                </p>
                <p className="text-gray-700 font-medium p-1">{product.pricePerDay}/day</p>
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

export default Homess;
