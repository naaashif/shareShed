import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaSearch, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function AllProducts() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState("")
  const [categoryFilter, setCategoryFilter] = React.useState("");
  const [companyFilter, setCompanyFilter] = React.useState("");
  const [sortOrder, setSortOrder] = React.useState("");

  const handleRentNow = (productId) => {
    navigate(`/product/${productId}`);

  };


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

  const filteredProducts = products.filter(product =>
    (categoryFilter === "" || product.category === categoryFilter) &&
    (companyFilter === "" || product.company === companyFilter)
  ).sort((a, b) => {
    if (sortOrder === "low-to-high") {
      return a.pricePerDay - b.pricePerDay;
    } else if (sortOrder === "high-to-low") {
      return b.pricePerDay - a.pricePerDay;
    }
    return 0;
  });

  return (
    <div>
      <Header />
      <div className='pt-6 bg-[#F1F0E9]'>
        {/* heading */}
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl font-bold mt-6'>Our Products</h1>
          <p className='text-lg mt-4 mb-8'>Explore our wide range of tools available for rent.</p>
          {/* Search Bar */}
          <div className="bg-white border border-white rounded-2xl p-2 flex items-center gap-2 sm:gap-4 shadow-2xl mb-4 w-11/12 max-w-2xl">
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
            >Search</button>
          </div>
        </div>
        {/* Filters Section */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8 mx-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2">
            {/* Filter by category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Category
              </label>
              <select
                id="category"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C352D] focus:border-transparent"
              >
                <option value="">All Categories</option>
                <option value="Power Tools">Power Tools</option>
                <option value="Hand Tools">Hand Tools</option>
                <option value="Garden Tools">Garden Tools</option>
              </select>
            </div>

            {/* Filter by company */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Company
              </label>
              <select
                id="company"
                value={companyFilter}
                onChange={(e) => setCompanyFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C352D] focus:border-transparent"
              >
                <option value="">All Companies</option>
                <option value="ToolRentals Inc.">ToolRentals Inc.</option>
                <option value="PowerTools Co.">PowerTools Co.</option>
                <option value="TorquePro">TorquePro</option>
                <option value="ToolMaster">ToolMaster</option>
              </select>
            </div>

            {/* Sort by price */}
            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
                Sort by Price
              </label>
              <select
                id="sort"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C352D] focus:border-transparent"
              >
                <option value="">Default</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Active filters indicator */}
          {(categoryFilter || companyFilter || sortOrder) && (
            <div className="mt-4 flex flex-wrap gap-2 items-center">
              <span className="text-sm text-gray-600">Active filters:</span>
              {categoryFilter && (
                <span className="px-3 py-1 bg-[#1C352D] text-white text-sm rounded-full flex items-center gap-2">
                  {categoryFilter}
                  <button
                    onClick={() => setCategoryFilter("")}
                    className="hover:text-gray-300"
                  >
                    ×
                  </button>
                </span>
              )}
              {companyFilter && (
                <span className="px-3 py-1 bg-[#1C352D] text-white text-sm rounded-full flex items-center gap-2">
                  {companyFilter}
                  <button
                    onClick={() => setCompanyFilter("")}
                    className="hover:text-gray-300"
                  >
                    ×
                  </button>
                </span>
              )}
              {sortOrder && (
                <span className="px-3 py-1 bg-[#1C352D] text-white text-sm rounded-full flex items-center gap-2">
                  {sortOrder === "low-to-high" ? "Price: Low to High" : "Price: High to Low"}
                  <button
                    onClick={() => setSortOrder("")}
                    className="hover:text-gray-300"
                  >
                    ×
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  setCategoryFilter("");
                  setCompanyFilter("");
                  setSortOrder("");
                }}
                className="text-sm text-[#1C352D] hover:underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Results count */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your filters.</p>
            <button
              onClick={() => {
                setCategoryFilter("");
                setCompanyFilter("");
                setSortOrder("");
              }}
              className="mt-4 px-6 py-2 bg-[#1C352D] text-white rounded-lg hover:bg-[#2a4a3f] transition"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 p-4">
            {filteredProducts.map((product) => (
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
                        onClick={() => handleRentNow(product.id)}
                        className="mt-3 px-4 py-2 text-sm bg-[#1C352D] text-white rounded hover:bg-[#2a4a3f] transition w-fit sm:w-full"
                      > Rent Now </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default AllProducts