import './App.css'

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader"
import Home from "./users/Home";
import Pnf from "./components/Pnf";
import Login from './users/Login';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => { setLoading(false); }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div className={loading ? "opacity-0" : "animate-[reveal_500ms_ease-out_forwards]"}>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/*" element={<Pnf />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
