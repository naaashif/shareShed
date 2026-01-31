import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaStar } from 'react-icons/fa';

function AllProducts() {
  const [categoryfilter,SetCategoryFilter] = React.useState("");
  const [companyfilter,SetCompanyFilter] = React.useState("");


  const products = [
    {
      id: 1,
      name: "Drill Machine",
      company: "ToolRentals Inc.",
      category: "Power Tools",
      pricePerDay: 500,
      rating: 4.0,
      image: "/tool3.png",
    },
    {
      id: 2,
      name: "Cordless Drill",
      company: "PowerTools Co.",
      category: "Power Tools",
      pricePerDay: 400,
      rating: 3.5,
      image: "/tool4.png",
    },
    {
      id: 3,
      name: "Angle Grinder",
      company: "TorquePro",
      category: "Power Tools",
      pricePerDay: 350,
      rating: 4.2,
      image: "/tool2.png",
    },
    {
      id: 4,
      name: "Circular Saw",
      company: "ToolRentals Inc.",
      category: "Power Tools",
      pricePerDay: 300,
      rating: 4.1,
      image: "/tool3.png",
    },
    {
      id: 5,
      name: "Hammer Drill",
      company: "TorquePro",
      category: "Power Tools",
      pricePerDay: 450,
      rating: 4.3,
      image: "/tool2.png",
    },
    {
      id: 6,
      name: "Jigsaw",
      company: "PowerTools Co.",
      category: "Power Tools",
      pricePerDay: 320,
      rating: 3.9,
      image: "/tool4.png",
    },
    {
      id: 7,
      name: "Rotary Sander",
      company: "TorquePro",
      category: "Power Tools",
      pricePerDay: 280,
      rating: 4.0,
      image: "/tool2.png",
    },
    {
      id: 8,
      name: "Impact Wrench",
      company: "TorquePro",
      category: "Power Tools",
      pricePerDay: 600,
      rating: 4.5,
      image: "/tool1.png",
    },
    {
      id: 9,
      name: "Tile Cutter",
      company: "ToolRentals Inc.",
      category: "Hand Tools",
      pricePerDay: 350,
      rating: 4.1,
      image: "/tool1.png",
    },
    {
      id: 10,
      name: "Nail Gun",
      company: "ToolRentals Inc.",
      category: "Hand Tools",
      pricePerDay: 550,
      rating: 4.4,
      image: "/tool3.png",
    },
    {
      id: 11,
      name: "Lawn Mower",
      company: "PowerTools Co.",
      category: "Garden Tools",
      pricePerDay: 700,
      rating: 4.6,
      image: "/tool4.png",
    },
    {
      id: 12,
      name: "Pressure Washer",
      company: "PowerTools Co.",
      category: "Garden Tools",
      pricePerDay: 650,
      rating: 4.3,
      image: "/tool1.png",
    },
    {
      id: 13,
      name: "Chainsaw",
      company: "ToolRentals Inc.",
      category: "Garden Tools",
      pricePerDay: 800,
      rating: 4.7,
      image: "/tool2.png",
    },
    {
      id: 14,
      name: "Air Compressor",
      company: "PowerTools Co.",
      category: "Power Tools",
      pricePerDay: 900,
      rating: 4.5,
      image: "/tool3.png",
    }
  ];
  return (
    <div>
      <Header />
      <div className='pt-6 bg-[#F1F0E9]'>
        {/* heading */}
       <div className='text-center'>
          <h1 className='text-4xl font-bold mt-6'>Our Products</h1>
          <p className='text-lg mt-4 mb-10'>Explore our wide range of tools available for rent.</p>
       </div>
       <div className="flex p-4">
       {/* filter by category  */}
        <div className="bg-white rounded-lg shadow-md px-4 py-2">
          <select className="bg-transparent border-none focus:ring-0"
           value={categoryfilter} 
           onChange={(e) => SetCategoryFilter(e.target.value)}>
            <option value="">All Categories</option>
            <option value="Power Tools">Power Tools</option>
            <option value="Hand Tools">Hand Tools</option>
            <option value="Garden Tools">Garden Tools</option>
          </select>
        </div>
        {/* filter by company */}
        <div className="bg-white rounded-lg shadow-md px-4 py-2 ms-4">
          <select className="bg-transparent border-none focus:ring-0"
          value={companyfilter}
           onChange={(e) => SetCompanyFilter(e.target.value)}>
            <option value="">All Companies</option>
            <option value="ToolRentals Inc.">ToolRentals Inc.</option>
            <option value="PowerTools Co.">PowerTools Co.</option>
            <option value="TorquePro">TorquePro</option>
          </select>
        </div>
        {/* sort by price range */}
        <div className="bg-white rounded-lg shadow-md px-4 py-2 ms-4">
          <select className="bg-transparent border-none focus:ring-0">
            <option value="">Sort by Price</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>
        {/* card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 p-4">
          {products.filter(product => 
            (categoryfilter === "" || product.category === categoryfilter) &&
            (companyfilter === "" || product.company === companyfilter)
          ).map((product) => (
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
      </div>
      <Footer />
    </div>
  )
}

export default AllProducts