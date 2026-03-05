import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaStar, FaArrowLeft, FaCalendarAlt, FaShoppingCart, FaCheckCircle } from 'react-icons/fa';

function ViewTools() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedDays, setSelectedDays] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Drill Machine",
      company: "ToolRentals Inc.",
      category: "Power Tools",
      pricePerDay: 500,
      rating: 4.0,
      reviews: 45,
      image: "/tool3.png",
      description: "Professional grade drill machine perfect for heavy-duty construction and woodworking projects. Features variable speed control and multiple drill bits included.",
      specifications: {
        power: "850W",
        speed: "0-3000 RPM",
        weight: "2.5 kg",
        chuckSize: "13mm"
      },
      features: [
        "Variable speed control",
        "Reversible rotation",
        "LED work light",
        "Ergonomic grip design",
        "Multiple drill bits included"
      ],
      availability: "Available",
      stock: 5
    },
    {
      id: 2,
      name: "Cordless Drill",
      company: "PowerTools Co.",
      category: "Power Tools",
      pricePerDay: 400,
      rating: 3.5,
      reviews: 32,
      image: "/tool4.png",
      description: "Lightweight cordless drill with long-lasting battery. Perfect for home DIY projects and light construction work.",
      specifications: {
        power: "20V Li-ion",
        speed: "0-1500 RPM",
        weight: "1.8 kg",
        chuckSize: "10mm"
      },
      features: [
        "Cordless operation",
        "Quick charge battery",
        "Compact design",
        "LED indicator",
        "Carrying case included"
      ],
      availability: "Available",
      stock: 8
    },
    {
      id: 3,
      name: "Angle Grinder",
      company: "TorquePro",
      category: "Power Tools",
      pricePerDay: 350,
      rating: 4.2,
      reviews: 58,
      image: "/tool2.png",
      description: "High-performance angle grinder for cutting, grinding, and polishing metal and stone surfaces.",
      specifications: {
        power: "900W",
        discSize: "115mm",
        speed: "11000 RPM",
        weight: "2.2 kg"
      },
      features: [
        "Powerful motor",
        "Safety guard",
        "Auxiliary handle",
        "Dust-proof switch",
        "Multiple discs included"
      ],
      availability: "Available",
      stock: 6
    },
    {
      id: 4,
      name: "Circular Saw",
      company: "ToolRentals Inc.",
      category: "Power Tools",
      pricePerDay: 300,
      rating: 4.1,
      reviews: 41,
      image: "/tool3.png",
      description: "Precision circular saw for straight cuts in wood, plywood, and other materials.",
      specifications: {
        power: "1200W",
        bladeSize: "185mm",
        depth: "65mm",
        weight: "4.0 kg"
      },
      features: [
        "Laser guide",
        "Depth adjustment",
        "Bevel cutting",
        "Dust extraction port",
        "Safety blade guard"
      ],
      availability: "Available",
      stock: 4
    },
    {
      id: 5,
      name: "Hammer Drill",
      company: "TorquePro",
      category: "Power Tools",
      pricePerDay: 450,
      rating: 4.3,
      reviews: 67,
      image: "/tool2.png",
      description: "Heavy-duty hammer drill for drilling into concrete, brick, and masonry.",
      specifications: {
        power: "1050W",
        speed: "0-2800 RPM",
        impact: "48000 BPM",
        weight: "3.2 kg"
      },
      features: [
        "Hammer and drill modes",
        "High impact force",
        "Depth rod included",
        "Anti-vibration handle",
        "Multiple drill bits"
      ],
      availability: "Available",
      stock: 7
    },
    {
      id: 6,
      name: "Jigsaw",
      company: "PowerTools Co.",
      category: "Power Tools",
      pricePerDay: 320,
      rating: 3.9,
      reviews: 29,
      image: "/tool4.png",
      description: "Versatile jigsaw for curved and straight cuts in various materials.",
      specifications: {
        power: "650W",
        strokeRate: "3000 SPM",
        depth: "80mm wood",
        weight: "2.0 kg"
      },
      features: [
        "Variable speed",
        "Tool-free blade change",
        "Dust blower",
        "Orbital action",
        "Multiple blades included"
      ],
      availability: "Available",
      stock: 5
    },
    {
      id: 7,
      name: "Rotary Sander",
      company: "TorquePro",
      category: "Power Tools",
      pricePerDay: 280,
      rating: 4.0,
      reviews: 38,
      image: "/tool2.png",
      description: "Efficient rotary sander for smooth finishing on wood and metal surfaces.",
      specifications: {
        power: "300W",
        padSize: "125mm",
        speed: "12000 OPM",
        weight: "1.5 kg"
      },
      features: [
        "Dust collection",
        "Ergonomic design",
        "Variable speed",
        "Multiple sanding discs",
        "Low vibration"
      ],
      availability: "Available",
      stock: 9
    },
    {
      id: 8,
      name: "Impact Wrench",
      company: "TorquePro",
      category: "Power Tools",
      pricePerDay: 600,
      rating: 4.5,
      reviews: 72,
      image: "/tool1.png",
      description: "High-torque impact wrench for automotive and industrial applications.",
      specifications: {
        power: "1200W",
        torque: "450 Nm",
        speed: "0-2200 RPM",
        weight: "2.8 kg"
      },
      features: [
        "High torque output",
        "Forward/reverse switch",
        "Multiple sockets included",
        "Durable construction",
        "Carrying case"
      ],
      availability: "Available",
      stock: 3
    },
    {
      id: 9,
      name: "Tile Cutter",
      company: "ToolRentals Inc.",
      category: "Hand Tools",
      pricePerDay: 350,
      rating: 4.1,
      reviews: 44,
      image: "/tool1.png",
      description: "Manual tile cutter for precise cuts on ceramic and porcelain tiles.",
      specifications: {
        cuttingLength: "600mm",
        thickness: "15mm max",
        weight: "8.0 kg",
        material: "Steel"
      },
      features: [
        "Precision cutting",
        "Adjustable angle",
        "Tungsten carbide wheel",
        "Stable base",
        "Easy to use"
      ],
      availability: "Available",
      stock: 6
    },
    {
      id: 10,
      name: "Nail Gun",
      company: "ToolRentals Inc.",
      category: "Hand Tools",
      pricePerDay: 550,
      rating: 4.4,
      reviews: 55,
      image: "/tool3.png",
      description: "Pneumatic nail gun for fast and efficient nailing in construction projects.",
      specifications: {
        type: "Pneumatic",
        nailLength: "15-50mm",
        capacity: "100 nails",
        weight: "2.3 kg"
      },
      features: [
        "Quick fire action",
        "Depth adjustment",
        "Anti-jam mechanism",
        "Safety trigger",
        "Nails included"
      ],
      availability: "Available",
      stock: 4
    },
    {
      id: 11,
      name: "Lawn Mower",
      company: "PowerTools Co.",
      category: "Garden Tools",
      pricePerDay: 700,
      rating: 4.6,
      reviews: 81,
      image: "/tool4.png",
      description: "Self-propelled lawn mower with adjustable cutting heights for perfect lawn maintenance.",
      specifications: {
        type: "Petrol",
        power: "4.5HP",
        cuttingWidth: "21 inches",
        weight: "35 kg"
      },
      features: [
        "Self-propelled",
        "5 cutting heights",
        "Large grass bag",
        "Easy start engine",
        "Sturdy wheels"
      ],
      availability: "Available",
      stock: 5
    },
    {
      id: 12,
      name: "Pressure Washer",
      company: "PowerTools Co.",
      category: "Garden Tools",
      pricePerDay: 650,
      rating: 4.3,
      reviews: 63,
      image: "/tool1.png",
      description: "High-pressure washer for cleaning driveways, patios, vehicles, and outdoor surfaces.",
      specifications: {
        pressure: "2000 PSI",
        flow: "1.6 GPM",
        power: "1800W",
        weight: "12 kg"
      },
      features: [
        "High pressure output",
        "Multiple nozzles",
        "Detergent tank",
        "Long hose",
        "Portable design"
      ],
      availability: "Available",
      stock: 7
    },
    {
      id: 13,
      name: "Chainsaw",
      company: "ToolRentals Inc.",
      category: "Garden Tools",
      pricePerDay: 800,
      rating: 4.7,
      reviews: 94,
      image: "/tool2.png",
      description: "Professional chainsaw for cutting trees, logs, and heavy-duty yard work.",
      specifications: {
        type: "Petrol",
        power: "2.5HP",
        barLength: "16 inches",
        weight: "5.5 kg"
      },
      features: [
        "Powerful engine",
        "Safety chain brake",
        "Anti-vibration system",
        "Easy chain tensioning",
        "Protective gear included"
      ],
      availability: "Available",
      stock: 3
    },
    {
      id: 14,
      name: "Air Compressor",
      company: "PowerTools Co.",
      category: "Power Tools",
      pricePerDay: 900,
      rating: 4.5,
      reviews: 76,
      image: "/tool3.png",
      description: "Portable air compressor for powering pneumatic tools and inflating tires.",
      specifications: {
        pressure: "150 PSI",
        tankSize: "24L",
        power: "2HP",
        weight: "25 kg"
      },
      features: [
        "Oil-free pump",
        "Dual pressure gauges",
        "Multiple couplers",
        "Thermal protection",
        "Wheels for portability"
      ],
      availability: "Available",
      stock: 4
    }
  ];

  // Find the product by ID
  const product = products.find(p => p.id === parseInt(productId));

  // Handle case where product is not found
  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-[#F1F0E9] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
            <button
              onClick={() => navigate('/products')}
              className="px-6 py-2 bg-[#1C352D] text-white rounded-lg hover:bg-[#2a4a3f] transition"
            >
              Back to Products
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Calculate total price
  const totalPrice = product.pricePerDay * selectedDays;

  // Handle booking
  const handleBooking = () => {
    if (!startDate) {
      alert('Please select a start date');
      return;
    }
    // Navigate to checkout or show booking confirmation
    alert(`Booking ${product.name} for ${selectedDays} days. Total: ₹${totalPrice}`);
    // In production: navigate('/checkout', { state: { product, selectedDays, startDate, endDate, totalPrice }});
  };

  // Calculate end date based on start date and selected days
  React.useEffect(() => {
    if (startDate && selectedDays) {
      const start = new Date(startDate);
      const end = new Date(start);
      end.setDate(start.getDate() + selectedDays);
      setEndDate(end.toISOString().split('T')[0]);
    }
  }, [startDate, selectedDays]);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#F1F0E9] py-8">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#1C352D] hover:text-[#2a4a3f] mb-6 transition"
          >
            <FaArrowLeft />
            <span>Back to Products</span>
          </button>

          {/* Main Product Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
              {/* Left: Product Image */}
              <div className="flex flex-col gap-4">
                <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center h-96">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                {/* Availability Badge */}
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-green-600 font-semibold">
                    {product.availability} - {product.stock} units in stock
                  </span>
                </div>
              </div>

              {/* Right: Product Details */}
              <div className="flex flex-col">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-[#1C352D] text-white text-sm rounded-full mb-3">
                    {product.category}
                  </span>
                  <h1 className="text-3xl lg:text-4xl font-bold text-[#1C352D] mb-2">
                    {product.name}
                  </h1>
                  <p className="text-lg text-gray-600 mb-3">{product.company}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-700 font-medium">
                      {product.rating}/5
                    </span>
                    <span className="text-gray-500">({product.reviews} reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <p className="text-4xl font-bold text-[#1C352D]">
                      ₹{product.pricePerDay}
                      <span className="text-lg font-normal text-gray-600">/day</span>
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Rental Options */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-[#1C352D] mb-4">
                    Rental Options
                  </h3>
                  
                  {/* Number of Days */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Days
                    </label>
                    <select
                      value={selectedDays}
                      onChange={(e) => setSelectedDays(parseInt(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C352D] focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 14, 30].map((days) => (
                        <option key={days} value={days}>
                          {days} {days === 1 ? 'day' : 'days'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Start Date */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C352D] focus:border-transparent"
                      />
                      <FaCalendarAlt className="absolute right-4 top-3 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* End Date (auto-calculated) */}
                  {startDate && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        End Date
                      </label>
                      <input
                        type="date"
                        value={endDate}
                        readOnly
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                      />
                    </div>
                  )}

                  {/* Total Price */}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-medium text-gray-700">Total Price:</span>
                      <span className="text-3xl font-bold text-[#1C352D]">
                        ₹{totalPrice}
                      </span>
                    </div>
                    <button
                      onClick={handleBooking}
                      className="w-full py-3 bg-[#1C352D] text-white font-semibold rounded-lg hover:bg-[#2a4a3f] transition-colors flex items-center justify-center gap-2"
                    >
                      <FaShoppingCart />
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details Tabs */}
            <div className="border-t border-gray-200">
              <div className="p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Specifications */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#1C352D] mb-4">
                      Specifications
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between py-3 border-b border-gray-200 last:border-0"
                        >
                          <span className="font-medium text-gray-700 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#1C352D] mb-4">
                      Key Features
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <ul className="space-y-3">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewTools;