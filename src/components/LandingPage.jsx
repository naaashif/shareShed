import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import HandymanIcon from "@mui/icons-material/Handyman";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SavingsIcon from "@mui/icons-material/Savings";

function LandingPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div
          className="flex justify-center items-center"
          style={{
            minHeight: "90vh",
            backgroundImage: `url(/hero.png)`,
            backgroundSize: "cover",
            backgroundPosition:"center",
            backgroundAttachment: "fixed",
            backgroundPosition:"top"
          }}>
          <div
            className="flex flex-col w-96 md:w-full max-w-lg bg-white/35 rounded-xl p-8
                         text-center items-center justify-around backdrop-blur-sm"
          >
            <h1 className=" text-3xl font-bold text-[#1C352D] z-10">
              Rent Smarter,Not Harder
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
        <div className="bg-[#F1F0E9] flex justify-around p-5">
          <div className="flex flex-col p-5 text-xl gap-4 mt-5">
            <h1 className="font-bold text-2xl">Browse Tools</h1>
            <p>
              Find a wide range of tools easily and choose what fits your needs.
            </p>
            <h1 className="font-bold text-2xl">Easy Rentals</h1>
            <p>Request tools for your preferred dates without any hassle.</p>
            <h1 className="font-bold text-2xl">Verified Providers</h1>
            <p>
              Rent tools from trusted and approved providers with confidence.
            </p>
            <h1 className="font-bold text-2xl">Simple Communication</h1>
            <p>Chat directly to clarify details before and during rentals.</p>
          </div>
          <div className="w-84 hidden md:flex">
            <img className="rounded" src="/driller2.png" alt="" />
          </div>
        </div>
        <h1 className="text-center text-4xl font-bold mt-4">
          Frequently Rented
        </h1>
        <div className="flex overflow-auto ">
            <div className="w-64 p-4 border border-gray-300 rounded-lg m-5">
              <img
                src="/driller2.png"
                alt="Drill"
                className="h-40 mx-auto rounded"
              />
              <h3 className="text-lg font-semibold text-center mt-4 px-5">
                Drill Machine
              </h3>
              <h3 className="text-md font-semibold text-center flex items-center justify-center">
                4/5 <StarIcon sx={{ color: "yellow" }} />
              </h3>
              <div className="flex items-center justify-between mt-4">
                <p className="text-gray-600 font-medium">₹500/day</p>
                <button className="px-3 py-1 text-sm bg-gray-800 text-white md:ms-0 rounded hover:bg-gray-700 ms-2">
                  Rent Now
                </button>
              </div>
            </div>
            <div className="w-64 p-4 border border-gray-300 rounded-lg m-5">
              <img
                src="/driller2.png"
                alt="Drill"
                className="h-40 mx-auto rounded"
              />
              <h3 className="text-lg font-semibold text-center mt-4 px-5">
                Drill Machine
              </h3>
              <h3 className="text-md font-semibold text-center flex items-center justify-center">
                4/5 <StarIcon sx={{ color: "yellow" }} />
              </h3>
              <div className="flex items-center justify-between mt-4">
                <p className="text-gray-600 font-medium">₹500/day</p>
                <button className="px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-gray-700">
                  Rent Now
                </button>
              </div>
            </div>
            <div className="w-64 p-4 border border-gray-300 rounded-lg m-5">
              <img
                src="/driller2.png"
                alt="Drill"
                className="h-40 mx-auto rounded"
              />
              <h3 className="text-lg font-semibold text-center mt-4 px-5">
                Drill Machine
              </h3>
              <h3 className="text-md font-semibold text-center flex items-center justify-center">
                4/5 <StarIcon sx={{ color: "yellow" }} />
              </h3>
              <div className="flex items-center justify-between mt-4">
                <p className="text-gray-600 font-medium">₹500/day</p>
                <button className="px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-gray-700">
                  Rent Now
                </button>
              </div> 
            </div>
            <div className="w-64 p-4 border border-gray-300 rounded-lg m-5">
              <img
                src="/driller2.png"
                alt="Drill"
                className="h-40 mx-auto rounded"
              />
              <h3 className="text-lg font-semibold text-center mt-4 px-5">
                Drill Machine
              </h3>
              <h3 className="text-md font-semibold text-center flex items-center justify-center">
                4/5 <StarIcon sx={{ color: "yellow" }} />
              </h3>
              <div className="flex items-center justify-between mt-4">
                <p className="text-gray-600 font-medium">₹500/day</p>
                <button className="px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-gray-700">
                  Rent Now
                </button>
              </div>
            </div>
        </div>
        <div className="bg-[#F1F0E9]  p-4">
          <h1 className="text-center text-3xl font-bold mt-3">Why Choose Us</h1>
          <div className="flex justify-around text-center p-4 md:gap-6 my-4 md:flex-row flex-col gap-9">
            <div className="mx-12 ">
              <SavingsIcon />
              <h1 className="text-lg font-semibold">Cost Effective Solution</h1>
              <p>
                Why buy a tool you’ll only use once? Save money by renting
                professional-grade equipment at a fraction of the purchase
                price.
              </p>
            </div>
            <div className="mx-12">
              <HandymanIcon />
              <h1 className="text-lg font-semibold">Zero Maintenance Hassle</h1>
              <p>
                Forget about storage, repairs, or sharpening. We handle all the
                maintenance so you can focus entirely on getting your project
                done.
              </p>
            </div>
            <div className="mx-12">
              <HandshakeIcon />
              <h1 className="text-lg font-semibold">Our Service</h1>
              <p>
                Experience hassle-free renting. From quick online booking to
                easy returns, we make getting the tools you need simple and
                fast.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
