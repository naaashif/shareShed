import { useState } from "react";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from 'react-toastify'

function Login() {
  const navigate = useNavigate();

  const [viewPassword, setViewPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      toast.warning('Fill the Form Completely')
      return;
    }

    setLoading(true);

    // TEMP MOCK LOGIN (replace with API later)
    setTimeout(() => {
      /*  TEMP ROLE LOGIC-Later this comes from backend response */
      const mockUser = {
        role: formData.email.includes("provider")
          ? "provider"
          : formData.email.includes("admin")
            ? "admin"
            : "user"
      };

      // Save role (temporary)
      localStorage.setItem("role", mockUser.role);

      // Redirect based on role
      if (mockUser.role === "admin") {
        navigate("/admin/dashboard");
      } else if (mockUser.role === "provider") {
        navigate("/provider/dashboard");
      } else {
        navigate("/user/home");
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('/loginbg.png')]">
      <div className="w-full min-h-screen flex justify-center items-center bg-white/60">
        <div className="p-10">
          <h1 className="text-4xl font-extrabold text-[#1C352D] text-center">
            ShareShed
          </h1>

          <div className="bg-[#1C352D] text-white p-6 rounded-2xl w-full min-w-80 max-w-100 mt-5">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full border flex items-center justify-center">
                <FaUser className="text-3xl" />
              </div>
            </div>

            <h2 className="text-2xl text-center font-semibold mb-4">Login</h2>

            {/* Email */}
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded mb-4 text-black bg-white"
            />

            {/* Password */}
            <div className="relative mb-2">
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type={viewPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-2 rounded text-black  bg-white"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setViewPassword(!viewPassword)}
              >
                {viewPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="text-right mb-4">
              <Link to={'/user/home'} className="text-xs underline">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              disabled={loading}
              className={`w-full p-2 rounded ${loading ? "bg-gray-500" : "bg-green-700"
                }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="text-center mt-4 text-blue-300">
              New user?{" "}
              <Link to="/register" className="underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
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

export default Login;
