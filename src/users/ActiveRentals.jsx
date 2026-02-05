import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

function ActiveRentals() {
  
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
      image: "/tool3.png",
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
    },
    {
      id: 5,
      name: "Hammer Drill",
      startDate: "2023-08-13",
      endDate: "2023-08-16",
      company: "DrillMasters",
      pricePerDay: 450,
      image: "/tool2.png",
    }
  ];
  
  return (
    <div className='bg-[#F1F0E9]'>
      <Header />
      <div className='mt-6'>
        {/* heading */}
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl font-bold mt-4'>Active Rentals</h1>
          <p className='text-lg mt-4 mb-4'>All your active rentals</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 p-4">
            {activeRentals.map((item) => (
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
      </div>
      <Footer />
    </div>
  )
}

export default ActiveRentals