import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaSearch, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      name: "Drill Machine",
      company: "ToolRentals Inc.",
      pricePerDay: 500,
      rating: 4.0,
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
      name: "Circular Saw",
      company: "CutTools Ltd.",
      pricePerDay: 300,
      rating: 4.1,
      image: "/tool3.png",
    },
    {
      id: 5,
      name: "Hammer Drill",
      company: "HeavyDuty Tools",
      pricePerDay: 450,
      rating: 4.3,
      image: "/tool2.png",
    },
    {
      id: 6,
      name: "Jigsaw",
      company: "CuttingEdge",
      pricePerDay: 320,
      rating: 3.9,
      image: "/tool4.png",
    },
    {
      id: 7,
      name: "Rotary Sander",
      company: "SmoothWorks",
      pricePerDay: 280,
      rating: 4.0,
      image: "/tool2.png",
    },
    {
      id: 8,
      name: "Impact Wrench",
      company: "TorquePro",
      pricePerDay: 600,
      rating: 4.5,
      image: "/tool1.png",
    },
    {
      id: 9,
      name: "Tile Cutter",
      company: "TileMaster",
      pricePerDay: 350,
      rating: 4.1,
      image: "/tool1.png",
    },
    {
      id: 10,
      name: "Nail Gun",
      company: "FastenRight",
      pricePerDay: 550,
      rating: 4.4,
      image: "/tool3.png",
    }
  ];

  const activeRentals = [
    {
      id: 1,
      name: "Drill Machine",
      startDate: "2023-08-12",
      endDate: "2023-08-15",
      company: "ToolRentals Inc.",
      pricePerDay: 500,
      image: "/tool1.png",
    },
    {
      id: 2,
      name: "Cordless Drill",
      startDate: "2023-08-10",
      endDate: "2023-08-14",
      company: "PowerTools Co.",
      pricePerDay: 400,
      image: "/tool4.png",
    },
    {
      id: 3,
      name: "Angle Grinder",
      startDate: "2023-08-11",
      endDate: "2023-08-13",
      company: "BuildMax",
      pricePerDay: 350,
      image: "/tool2.png",
    },
    {
      id: 4,
      name: "Circular Saw",
      startDate: "2023-08-09",
      endDate: "2023-08-12",
      company: "CutTools Ltd.",
      pricePerDay: 300,
      image: "/tool3.png",
    }
  ];

  return (
    <div className="bg-[#F1F0E9] min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="flex justify-center flex-col items-center min-h-96 bg-[url(/hero.png)] bg-cover bg-top-left px-4 py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C352D] text-center">
          Welcome back, User
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-4 font-semibold text-[#1C352D] text-center">
          Rent tools from our trusted providers
        </p>

        {/* Search Bar */}
        <div className="bg-white border border-white rounded-2xl p-2 flex items-center gap-2 sm:gap-4 shadow-2xl mt-6 w-11/12 max-w-2xl">
          <FaSearch className="w-5 h-5 ml-2 sm:ml-4 text-slate-700 shrink-0" />
          <input
            type="text"
            placeholder="Search for drills, saws, sanders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 border-none outline-none py-1 min-w-0 text-black placeholder-slate-700"
            aria-label="Search for tools"
          />
          <button
            // onClick={handleSearch}
            className="bg-[#1C352D] text-white px-4 sm:px-6 py-2 rounded-xl font-semibold transition transform hover:scale-105 hover:bg-[#2a4a3f] shrink-0"
            aria-label="Search"
          >
            Search
          </button>
        </div>
      </div>

      {/* Active Rentals */}
      {activeRentals.length > 0 && (
        <section className="p-4 bg-[#F1F0E9]">
          <h2 className="font-bold text-2xl md:text-4xl m-4">Active Rentals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {activeRentals.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="min-h-40 md:h-32 grid grid-cols-[auto_1fr] gap-2 md:gap-4 shadow-lg rounded-lg bg-white items-center overflow-hidden"
              >
                {/* Image */}
                <div className="w-32 h-32 md:w-28 md:h-28 shrink-0 flex items-center justify-center border border-gray-300 bg-gray-100 rounded-lg m-2">
                  <img
                    src={item.image}
                    alt={`${item.name} from ${item.company}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between py-2 pr-2 md:pr-4 min-w-0">
                  <div>
                    <h3 className="font-semibold text-base md:text-lg truncate">{item.name}</h3>
                    <p className="text-xs md:text-sm text-gray-600 truncate">
                      {`${item.startDate} to ${item.endDate}`}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 truncate">{item.company}</p>
                  </div>

                  {/* Action */}
                  <div className="flex items-center justify-between mt-2 gap-2">
                    <p className="font-semibold text-base md:text-lg">₹{item.pricePerDay}/day</p>
                    <Link
                      to={`/user/rental/${item.id}`}
                      className="px-2 md:px-3 py-1 bg-[#1C352D] text-white rounded text-base hover:bg-[#2a4a3f] transition whitespace-nowrap"
                    >
                      manage
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See All Button */}
          {activeRentals.length > 3 && (
            <div className="flex justify-center mt-6">
              <Link
                to="/user/activeRentals"
                className="bg-[#1C352D] rounded-lg py-2 px-4 md:px-6 font-semibold text-base md:text-lg shadow-xl text-white hover:bg-[#2a4a3f] transition"
              >
                See All Active Rentals
              </Link>
            </div>
          )}
        </section>
      )}

      {/* Featured Products */}
      <section id="products" className="bg-[#F1F0E9] shadow-xl py-6">
        <div className="flex justify-between sm:justify-start sm:flex-row items-start sm:items-center gap-4 px-4 mb-4">
          <h2 className="font-bold text-2xl md:text-4xl">Recommended Products</h2>
          <Link
            to="/user/allProducts"
            className="bg-[#1C352D] rounded-lg py-1 px-4 md:px-6 font-semibold text-base md:text-lg shadow-xl text-white hover:bg-[#2a4a3f] transition"
          >
            View All
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 p-4">
          {products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 rounded-lg bg-white flex flex-col sm:flex-row overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="w-full h-64 sm:w-44 sm:h-44 shrink-0 bg-gray-50 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={`${product.name} from ${product.company}`}
                  className="max-w-full max-h-full object-contain p-2"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col p-4 sm:p-3 justify-between flex-1">
                <div className="flex flex-row justify-between sm:flex-col">
                  <div>
                    <h3 className="text-lg font-semibold line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-base font-semibold text-gray-600 mt-1 line-clamp-1">
                      {product.company}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-sm font-medium">{product.rating}/5</span>
                      <FaStar className="text-yellow-400 w-4 h-4" />
                    </div>
                  </div>
                  <div className="mt-1">
                    <p className="text-gray-700 font-semibold mt-2">₹{product.pricePerDay}/day</p>
                    <button
                      // onClick={() => handleRentNow(product.id)}
                      className="mt-3 px-4 py-2 text-sm bg-[#1C352D] text-white rounded hover:bg-[#2a4a3f] transition w-fit sm:w-full"
                    > Rent Now </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;