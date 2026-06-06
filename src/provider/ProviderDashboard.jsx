import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import {
  FaTools,
  FaChartLine,
  FaPlusCircle,
  FaHistory,
  FaSignOutAlt,
  FaStar,
  FaTrash,
  FaCheckCircle,
  FaExclamationTriangle,
  FaSpinner,
  FaFolder,
  FaCoins,
  FaUsers
} from "react-icons/fa";
import {
  addToolAPI,
  getProviderToolsAPI,
  updateToolAPI,
  deleteToolAPI,
  getProviderBookingsAPI,
  addBookingAPI
} from "../services/allAPI";

function ProviderDashboard() {
  const navigate = useNavigate();

  // Local States
  const [provider, setProvider] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [tools, setTools] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form State for listing new product
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "Power Tools",
    pricePerDay: "",
    image: "/tool3.png",
    customImage: "",
    description: ""
  });

  const [formLoading, setFormLoading] = useState(false);

  // Default image presets for tools
  const imagePresets = [
    { label: "Hammer Drill", url: "/tool3.png" },
    { label: "Circular Saw", url: "/tool4.png" },
    { label: "Angle Grinder", url: "/tool2.png" },
    { label: "Wrench Set", url: "/tool1.png" }
  ];

  // Auth validation & Initial Fetch
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user || user.role !== "provider") {
      toast.error("Unauthorized access. Redirecting...");
      setTimeout(() => navigate("/login"), 1500);
    } else {
      setProvider(user);
      fetchDashboardData(user._id);
    }
  }, [navigate]);

  // Fetch data from MongoDB APIs
  const fetchDashboardData = async (providerId) => {
    setLoading(true);
    try {
      // 1. Fetch listed tools
      const toolRes = await getProviderToolsAPI(providerId);
      let providerTools = [];
      if (toolRes.status === 200) {
        providerTools = toolRes.data;
        setTools(providerTools);
      }

      // 2. Fetch bookings
      const bookingRes = await getProviderBookingsAPI(providerId);
      if (bookingRes.status === 200) {
        let providerBookings = bookingRes.data;
        
        // Seeding helper: If provider has tools but no bookings yet,
        // create a couple of mock bookings in database to demonstrate analytics/charts.
        if (providerBookings.length === 0 && providerTools.length > 0) {
          await seedMockData(providerId, providerTools);
          const refetchedBookings = await getProviderBookingsAPI(providerId);
          if (refetchedBookings.status === 200) {
            providerBookings = refetchedBookings.data;
          }
          // Refetch tools to update earnings metrics
          const refetchedTools = await getProviderToolsAPI(providerId);
          if (refetchedTools.status === 200) {
            setTools(refetchedTools.data);
          }
        }
        setBookings(providerBookings);
      }
    } catch (err) {
      console.error("Error fetching dashboard details:", err);
      toast.error("Failed to load dashboard data from database.");
    } finally {
      setLoading(false);
    }
  };

  // Seeding mock booking records to MongoDB for demonstrating charts on first usage
  const seedMockData = async (providerId, providerTools) => {
    try {
      const mockBookings = [
        {
          toolId: providerTools[0]._id,
          toolName: providerTools[0].name,
          renterName: "Aman Sharma",
          startDate: "2026-06-01",
          endDate: "2026-06-03",
          totalPrice: providerTools[0].pricePerDay * 2,
          status: "Completed",
          providerId
        },
        {
          toolId: providerTools[0]._id,
          toolName: providerTools[0].name,
          renterName: "Rohan Varma",
          startDate: "2026-06-04",
          endDate: "2026-06-07",
          totalPrice: providerTools[0].pricePerDay * 3,
          status: "Active",
          providerId
        }
      ];

      for (const booking of mockBookings) {
        await addBookingAPI(booking);
      }
    } catch (err) {
      console.log("Mock data seeding skipped or failed", err);
    }
  };

  // Add Product Form submit
  const handleAddTool = async (e) => {
    e.preventDefault();
    const { name, brand, category, pricePerDay, image, customImage, description } = formData;

    if (!name || !brand || !pricePerDay) {
      toast.warning("Please fill in all mandatory fields.");
      return;
    }

    setFormLoading(true);
    const finalImage = customImage.trim() !== "" ? customImage : image;

    const payload = {
      name,
      brand,
      category,
      pricePerDay: Number(pricePerDay),
      image: finalImage,
      description,
      providerId: provider._id,
      providerName: provider.providerDetails?.shopName || provider.username
    };

    try {
      const res = await addToolAPI(payload);
      if (res.status === 200) {
        toast.success("Tool listed successfully!");
        setFormData({
          name: "",
          brand: "",
          category: "Power Tools",
          pricePerDay: "",
          image: "/tool3.png",
          customImage: "",
          description: ""
        });
        setActiveTab("my-tools");
        fetchDashboardData(provider._id);
      } else {
        toast.error("Failed to add tool to database.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred. Check server logs.");
    } finally {
      setFormLoading(false);
    }
  };

  // Delete Tool
  const handleDeleteTool = async (id) => {
    if (!window.confirm("Are you sure you want to delete this tool?")) return;

    try {
      const res = await deleteToolAPI(id);
      if (res.status === 200) {
        toast.success("Tool deleted successfully!");
        fetchDashboardData(provider._id);
      } else {
        toast.error("Could not delete the tool.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error occurred while deleting.");
    }
  };

  // Toggle status of the tool
  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await updateToolAPI(id, { status: newStatus });
      if (res.status === 200) {
        toast.success(`Status updated to ${newStatus}`);
        // Quick update in local state to avoid full reload loading spinner
        setTools(prev =>
          prev.map(t => (t._id === id ? { ...t, status: newStatus } : t))
        );
      } else {
        toast.error("Failed to update status.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error toggling tool status.");
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("role");
    toast.success("Logged out successfully.");
    setTimeout(() => navigate("/login"), 1000);
  };

  // Calculate dynamic metrics
  const totalEarnings = tools.reduce((sum, item) => sum + (item.totalEarnings || 0), 0);
  const activeRentalsCount = tools.filter(t => t.status === "Rented").length;
  const totalToolsCount = tools.length;
  const avgRating = tools.length
    ? (tools.reduce((sum, t) => sum + (t.rating || 5), 0) / tools.length).toFixed(1)
    : "5.0";

  // Category chart distribution calculations
  const categories = ["Power Tools", "Hand Tools", "Garden Tools", "Heavy Machinery", "Other"];
  const categoryCounts = categories.map(cat => ({
    category: cat,
    count: tools.filter(t => t.category === cat).length
  }));
  const maxCategoryCount = Math.max(...categoryCounts.map(c => c.count), 1);

  // Status breakdown calculations
  const statusCounts = {
    Available: tools.filter(t => t.status === "Available").length,
    Rented: tools.filter(t => t.status === "Rented").length,
    Maintenance: tools.filter(t => t.status === "Under Maintenance").length
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#F1F0E9] text-gray-800">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-[#1C352D] text-white flex flex-col shrink-0">
        {/* Sidebar Header / Brand */}
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <img src="/logo.png" alt="logo" className="w-9 h-9" />
          <h1 className="text-2xl font-extrabold tracking-wide">ShareShed</h1>
        </div>

        {/* Profile Card Summary */}
        {provider && (
          <div className="p-5 border-b border-white/10 bg-white/5">
            <h2 className="font-semibold text-lg truncate text-green-300">
              {provider.providerDetails?.shopName || "Provider Shop"}
            </h2>
            <p className="text-xs text-gray-300 truncate mt-0.5">{provider.email}</p>
            <span className="inline-block mt-2 px-2 py-0.5 text-[10px] uppercase font-bold bg-green-700 text-white rounded-full">
              Provider Mode
            </span>
          </div>
        )}

        {/* Navigation Tabs */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
              activeTab === "overview"
                ? "bg-white text-[#1C352D] shadow-lg"
                : "hover:bg-white/10 text-gray-300 hover:text-white"
            }`}
          >
            <FaChartLine className="text-lg" />
            Overview & Analytics
          </button>

          <button
            onClick={() => setActiveTab("my-tools")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
              activeTab === "my-tools"
                ? "bg-white text-[#1C352D] shadow-lg"
                : "hover:bg-white/10 text-gray-300 hover:text-white"
            }`}
          >
            <FaTools className="text-lg" />
            My Tools Inventory
          </button>

          <button
            onClick={() => setActiveTab("add-tool")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
              activeTab === "add-tool"
                ? "bg-white text-[#1C352D] shadow-lg"
                : "hover:bg-white/10 text-gray-300 hover:text-white"
            }`}
          >
            <FaPlusCircle className="text-lg" />
            List a New Tool
          </button>

          <button
            onClick={() => setActiveTab("bookings")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
              activeTab === "bookings"
                ? "bg-white text-[#1C352D] shadow-lg"
                : "hover:bg-white/10 text-gray-300 hover:text-white"
            }`}
          >
            <FaHistory className="text-lg" />
            Rentals & Bookings
          </button>
        </nav>

        {/* Sidebar Footer Logout */}
        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-800/80 hover:bg-red-700 text-white rounded-lg text-sm font-semibold transition"
          >
            <FaSignOutAlt />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Dashboard Area */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header Navbar */}
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between border-b border-gray-200">
          <div>
            <h1 className="text-2xl font-bold text-[#1C352D] capitalize">
              {activeTab === "overview" && "Dashboard Overview"}
              {activeTab === "my-tools" && "My Listed Tools"}
              {activeTab === "add-tool" && "Add New Rental Tool"}
              {activeTab === "bookings" && "Booking & Rent logs"}
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Manage your tools rental business smoothly in real time.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600 hidden sm:inline">
              Welcome, <span className="font-bold text-[#1C352D]">{provider?.username}</span>
            </span>
          </div>
        </header>

        {/* Content Pane */}
        <div className="p-6 flex-1 overflow-y-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-96">
              <FaSpinner className="animate-spin text-[#1C352D] text-4xl mb-3" />
              <p className="text-gray-600 font-medium">Fetching database records...</p>
            </div>
          ) : (
            <>
              {/* TAB 1: OVERVIEW & ANALYTICS */}
              {activeTab === "overview" && (
                <div className="space-y-8 animate-[fadeIn_300ms_ease-out]">
                  {/* Dynamic Metric Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Earnings Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-green-600 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Total Earnings</p>
                        <h3 className="text-2xl font-extrabold text-[#1C352D] mt-1">₹{totalEarnings}</h3>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-700">
                        <FaCoins className="text-xl" />
                      </div>
                    </div>

                    {/* Active Rentals Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-orange-500 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Active Rentals</p>
                        <h3 className="text-2xl font-extrabold text-orange-600 mt-1">{activeRentalsCount}</h3>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                        <FaUsers className="text-xl" />
                      </div>
                    </div>

                    {/* Total listed tools Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-blue-600 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Listed Tools</p>
                        <h3 className="text-2xl font-extrabold text-blue-600 mt-1">{totalToolsCount}</h3>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                        <FaTools className="text-xl" />
                      </div>
                    </div>

                    {/* Average Rating Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-yellow-500 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Shop Rating</p>
                        <h3 className="text-2xl font-extrabold text-yellow-600 mt-1 flex items-center gap-1.5">
                          {avgRating} <span className="text-lg text-gray-400">/5</span>
                        </h3>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500">
                        <FaStar className="text-xl" />
                      </div>
                    </div>
                  </div>

                  {/* SVG Charts Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* 1. Monthly Revenue Bar Chart */}
                    <div className="bg-white p-6 rounded-2xl shadow-md lg:col-span-2">
                      <h4 className="font-bold text-lg text-[#1C352D] mb-4">Earnings History (Past 6 Months)</h4>
                      <div className="relative h-64 flex items-end justify-between px-2 pt-6 border-b border-gray-200">
                        {/* Bars representing monthly revenues */}
                        {[
                          { month: "Jan", val: Math.round(totalEarnings * 0.1) },
                          { month: "Feb", val: Math.round(totalEarnings * 0.15) },
                          { month: "Mar", val: Math.round(totalEarnings * 0.2) },
                          { month: "Apr", val: Math.round(totalEarnings * 0.1) },
                          { month: "May", val: Math.round(totalEarnings * 0.18) },
                          { month: "Jun", val: Math.round(totalEarnings * 0.27) }
                        ].map((m, idx) => {
                          const percentHeight = totalEarnings > 0 ? (m.val / totalEarnings) * 100 * 2 : 10;
                          return (
                            <div key={idx} className="flex flex-col items-center flex-1 group">
                              <span className="text-[11px] font-semibold text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity mb-1.5">
                                ₹{m.val}
                              </span>
                              <div
                                style={{ height: `${Math.min(percentHeight + 15, 90)}%` }}
                                className="w-8 sm:w-12 bg-[#1C352D] hover:bg-green-700 rounded-t-lg transition-all duration-300 cursor-pointer shadow-sm"
                              ></div>
                              <span className="text-xs font-bold mt-2 text-gray-600">{m.month}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* 2. Tool availability status breakdown */}
                    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-lg text-[#1C352D] mb-4">Availability Stats</h4>
                        <div className="space-y-4 mt-2">
                          {/* Available status gauge */}
                          <div>
                            <div className="flex justify-between text-xs font-bold text-gray-600 mb-1">
                              <span>Available ({statusCounts.Available})</span>
                              <span>
                                {totalToolsCount
                                  ? Math.round((statusCounts.Available / totalToolsCount) * 100)
                                  : 0}
                                %
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                              <div
                                style={{
                                  width: `${
                                    totalToolsCount ? (statusCounts.Available / totalToolsCount) * 100 : 0
                                  }%`
                                }}
                                className="bg-green-600 h-full rounded-full"
                              ></div>
                            </div>
                          </div>

                          {/* Rented status gauge */}
                          <div>
                            <div className="flex justify-between text-xs font-bold text-gray-600 mb-1">
                              <span>Rented ({statusCounts.Rented})</span>
                              <span>
                                {totalToolsCount ? Math.round((statusCounts.Rented / totalToolsCount) * 100) : 0}
                                %
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                              <div
                                style={{
                                  width: `${totalToolsCount ? (statusCounts.Rented / totalToolsCount) * 100 : 0}%`
                                }}
                                className="bg-orange-500 h-full rounded-full"
                              ></div>
                            </div>
                          </div>

                          {/* Under Maintenance status gauge */}
                          <div>
                            <div className="flex justify-between text-xs font-bold text-gray-600 mb-1">
                              <span>In Maintenance ({statusCounts.Maintenance})</span>
                              <span>
                                {totalToolsCount
                                  ? Math.round((statusCounts.Maintenance / totalToolsCount) * 100)
                                  : 0}
                                %
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                              <div
                                style={{
                                  width: `${
                                    totalToolsCount ? (statusCounts.Maintenance / totalToolsCount) * 100 : 0
                                  }%`
                                }}
                                className="bg-red-600 h-full rounded-full"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-4 mt-4 text-center">
                        <p className="text-xs text-gray-400 font-medium">
                          Active rentals automatically lock tools from search index listings.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 3. Product category horizontal distribution chart */}
                  <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h4 className="font-bold text-lg text-[#1C352D] mb-4">Inventory by Categories</h4>
                    <div className="space-y-4">
                      {categoryCounts.map((c, i) => {
                        const ratio = totalToolsCount ? c.count / totalToolsCount : 0;
                        return (
                          <div key={i} className="flex items-center gap-4">
                            <span className="w-32 text-xs font-bold text-gray-600 truncate">{c.category}</span>
                            <div className="flex-1 bg-gray-100 h-6 rounded-lg overflow-hidden relative">
                              <div
                                style={{ width: `${ratio * 100}%` }}
                                className="bg-[#1C352D]/85 hover:bg-[#1C352D] h-full rounded-lg transition-all duration-300"
                              ></div>
                              <span className="absolute left-2.5 top-0.5 text-[11px] font-bold text-[#1C352D] drop-shadow-sm">
                                {c.count} items
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: MY TOOLS INVENTORY */}
              {activeTab === "my-tools" && (
                <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-[fadeIn_300ms_ease-out]">
                  {tools.length === 0 ? (
                    <div className="p-12 text-center">
                      <FaFolder className="text-gray-300 text-6xl mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-600">No Tools Listed Yet</h3>
                      <p className="text-gray-400 mt-2">
                        List your first tool today to start renting and earning.
                      </p>
                      <button
                        onClick={() => setActiveTab("add-tool")}
                        className="mt-5 px-5 py-2.5 bg-[#1C352D] text-white rounded-xl font-semibold hover:bg-green-800 transition"
                      >
                        List a Tool Now
                      </button>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Tool</th>
                            <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Category</th>
                            <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Price/Day</th>
                            <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Rating</th>
                            <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Status</th>
                            <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Total Bookings</th>
                            <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {tools.map((item) => (
                            <tr key={item._id} className="hover:bg-gray-50 transition">
                              {/* Name & Brand */}
                              <td className="p-4 flex items-center gap-3">
                                <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center shrink-0">
                                  <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain p-1" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-sm text-gray-800">{item.name}</h4>
                                  <p className="text-xs text-gray-400">{item.brand}</p>
                                </div>
                              </td>

                              {/* Category */}
                              <td className="p-4 text-sm font-medium text-gray-600">{item.category}</td>

                              {/* Price */}
                              <td className="p-4 text-sm font-bold text-gray-800">₹{item.pricePerDay}</td>

                              {/* Rating */}
                              <td className="p-4">
                                <span className="flex items-center gap-1 text-sm font-bold text-yellow-600 bg-yellow-50 w-fit px-2 py-0.5 rounded-full">
                                  {item.rating || 5} <FaStar className="text-xs" />
                                </span>
                              </td>

                              {/* Status Toggle Select Dropdown */}
                              <td className="p-4">
                                <select
                                  value={item.status}
                                  onChange={(e) => handleStatusChange(item._id, e.target.value)}
                                  className={`text-xs font-bold rounded-full px-2.5 py-1 border outline-none cursor-pointer ${
                                    item.status === "Available"
                                      ? "bg-green-50 text-green-700 border-green-200"
                                      : item.status === "Rented"
                                      ? "bg-orange-50 text-orange-700 border-orange-200"
                                      : "bg-red-50 text-red-700 border-red-200"
                                  }`}
                                >
                                  <option value="Available">Available</option>
                                  <option value="Rented">Rented</option>
                                  <option value="Under Maintenance">Under Maintenance</option>
                                </select>
                              </td>

                              {/* Bookings Count */}
                              <td className="p-4 text-sm font-medium text-gray-600">
                                {item.rentalsCount || 0} rents (₹{item.totalEarnings || 0})
                              </td>

                              {/* Actions */}
                              <td className="p-4 text-center">
                                <button
                                  onClick={() => handleDeleteTool(item._id)}
                                  className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-lg transition"
                                  title="Delete Listing"
                                >
                                  <FaTrash />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: ADD NEW rental TOOL */}
              {activeTab === "add-tool" && (
                <div className="bg-white rounded-2xl shadow-md p-6 max-w-3xl mx-auto animate-[fadeIn_300ms_ease-out]">
                  <form onSubmit={handleAddTool} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                          Tool Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Cordless Hammer Drill"
                          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1C352D] focus:border-transparent outline-none bg-white text-black"
                        />
                      </div>

                      {/* Brand */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                          Brand / Manufacturer <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.brand}
                          onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                          placeholder="e.g. Bosch, Makita"
                          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1C352D] focus:border-transparent outline-none bg-white text-black"
                        />
                      </div>

                      {/* Category */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                          Category
                        </label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1C352D] focus:border-transparent outline-none bg-white text-black"
                        >
                          {categories.map((cat, idx) => (
                            <option key={idx} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>

                      {/* Price per day */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                          Rental Fee per Day (₹) <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          required
                          min="0"
                          value={formData.pricePerDay}
                          onChange={(e) => setFormData({ ...formData, pricePerDay: e.target.value })}
                          placeholder="₹ e.g. 450"
                          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1C352D] focus:border-transparent outline-none bg-white text-black"
                        />
                      </div>
                    </div>

                    {/* Image Preset Selectors */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        Choose a preset image
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {imagePresets.map((p, idx) => (
                          <div
                            key={idx}
                            onClick={() => setFormData({ ...formData, image: p.url, customImage: "" })}
                            className={`p-3 border rounded-xl flex flex-col items-center cursor-pointer hover:border-[#1C352D] transition ${
                              formData.image === p.url && formData.customImage === ""
                                ? "border-[#1C352D] bg-[#1C352D]/5"
                                : "border-gray-200"
                            }`}
                          >
                            <img src={p.url} alt={p.label} className="w-12 h-12 object-contain" />
                            <span className="text-xs font-medium text-gray-600 mt-1">{p.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Custom Image URL */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        Or enter custom Image URL
                      </label>
                      <input
                        type="url"
                        value={formData.customImage}
                        onChange={(e) => setFormData({ ...formData, customImage: e.target.value })}
                        placeholder="https://example.com/tool-image.jpg"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1C352D] focus:border-transparent outline-none bg-white text-black"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        Description / Terms
                      </label>
                      <textarea
                        rows="4"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Provide maintenance instructions, specs, safety requirements, deposit details, etc."
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1C352D] focus:border-transparent outline-none bg-white text-black"
                      ></textarea>
                    </div>

                    {/* Action button */}
                    <div className="pt-4 flex justify-end">
                      <button
                        type="submit"
                        disabled={formLoading}
                        className="px-6 py-3 bg-[#1C352D] hover:bg-green-800 text-white font-semibold rounded-xl shadow-md transition disabled:bg-gray-400"
                      >
                        {formLoading ? "Creating listing..." : "Publish Listing"}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* TAB 4: RENTALS & BOOKINGS */}
              {activeTab === "bookings" && (
                <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-[fadeIn_300ms_ease-out]">
                  {bookings.length === 0 ? (
                    <div className="p-12 text-center">
                      <FaHistory className="text-gray-300 text-6xl mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-600">No Bookings Logged Yet</h3>
                      <p className="text-gray-400 mt-2">
                        Rentals booked by customers will show up here automatically.
                      </p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Tool Name</th>
                            <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Renter</th>
                            <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Start Date</th>
                            <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">End Date</th>
                            <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Total Price</th>
                            <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500">Booking Date</th>
                            <th className="p-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-center">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {bookings.map((b) => (
                            <tr key={b._id} className="hover:bg-gray-50 transition">
                              <td className="p-4 font-semibold text-sm text-gray-800">{b.toolName}</td>
                              <td className="p-4 text-sm font-medium text-gray-600">{b.renterName}</td>
                              <td className="p-4 text-sm text-gray-600">{b.startDate}</td>
                              <td className="p-4 text-sm text-gray-600">{b.endDate}</td>
                              <td className="p-4 text-sm font-bold text-gray-800">₹{b.totalPrice}</td>
                              <td className="p-4 text-xs text-gray-400">
                                {new Date(b.createdAt).toLocaleDateString("en-IN", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric"
                                })}
                              </td>
                              <td className="p-4 text-center">
                                <span
                                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                                    b.status === "Active"
                                      ? "bg-green-100 text-green-800"
                                      : b.status === "Completed"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-yellow-100 text-yellow-800"
                                  }`}
                                >
                                  {b.status === "Active" ? <FaCheckCircle className="text-xs" /> : <FaHistory className="text-xs" />}
                                  {b.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default ProviderDashboard;