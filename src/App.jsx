import "./App.css";

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import Home from "./users/Home";
import Pnf from "./components/Pnf";
import Login from "./AuthPages/Login";
import LandingPage from "./components/LandingPage";
import AdminDasboard from "./admin/AdminDasboard";
import ProviderDashboard from "./provider/ProviderDashboard";
import Register from "./AuthPages/Register";
import ActiveRentals from "./users/ActiveRentals";
import AllProducts from "./users/AllProducts";
import Contact from "./pages/Contact";
import Docs from "./pages/Docs";
import ViewTools from "./users/ViewTools";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);}, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div
        className={
          loading ? "opacity-0" : "animate-[reveal_500ms_ease-out_forwards]"
        }
      >
        <Routes> 
          <Route path="/" element={<LandingPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/user/home" element={<Home />} />

          <Route path="/user/activeRentals" element={<ActiveRentals />} />
          <Route path="/user/allProducts" element={<AllProducts />} />
          <Route path="/product/:productId" element={<ViewTools />} />

          <Route path="/provider/dashboard" element={<ProviderDashboard />} />

          <Route path="/admin/dashboard" element={<AdminDasboard />} />
          {/* contact,sopport, dev */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Contact />} />
          <Route path="/developers" element={<Contact />} />
          {/* all to the docs */}
          <Route path="/faq" element={<Docs />} />
          <Route path="/about" element={<Docs />} />
          <Route path="/terms" element={<Docs />} />
          <Route path="/policy" element={<Docs />} />
          <Route path="/referUs" element={<Docs />} />
          <Route path="/distributors" element={<Docs />} />



          <Route path="/*" element={<Pnf />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
