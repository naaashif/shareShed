import { useState } from "react";
import { FaUser, FaTools } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
    company: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    if (!formData.role) {
      alert("Please select a role");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // TEMP: simulate successful register
    // Later → API call here
    console.log(formData);

    // Redirect based on role
    if (formData.role === "user") {
      navigate("/user/home");
    } else {
      navigate("/provider/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('/loginbg.png')]">
      <div className="w-full  min-h-screen flex justify-center items-center bg-white/60">
        <div className="p-10">
          <h1 className="text-4xl font-extrabold text-[#1C352D] text-center">
            ShareShed
          </h1>

          <div className="bg-[#1C352D] text-white p-6 rounded-2xl w-full min-w-80 max-w-105 mx-2 mt-5">
            <h2 className="text-2xl text-center mb-4 font-semibold">
              Register as
            </h2>

            {/* select user or provider */}
            <div className="flex gap-2 mb-10 justify-center">
              <button
                onClick={() => setFormData({ ...formData, role: "user" })}
                className={`flex p-4 rounded-full cursor-pointer border text-center ${
                  formData.role === "user"
                    ? "bg-green-700 border-green-700"
                    : "border-gray-400"
                }`}
              >
                <div className="">
                  <p className="flex justify-center items-center">
                    {" "}
                    <FaUser className="me-1 md:me-2 text-md md:text-xl" /> Rent
                    Tools
                  </p>
                </div>
              </button>

              <button
                onClick={() => setFormData({ ...formData, role: "provider" })}
                className={`flex p-4 rounded-full cursor-pointer border text-center ${
                  formData.role === "provider"
                    ? "bg-green-700 border-green-700"
                    : "border-gray-400"
                }`}
              >
                <div className="">
                  <p className="flex justify-center items-center">
                    {" "}
                    <FaTools className="me-1 md:me-2 text-md md:text-xl" />{" "}
                    Provide Tools
                  </p>
                </div>
              </button>
            </div>

            {/* user details */}
           
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              type="text"
              placeholder="Username"
              className="w-full p-2 rounded-lg mb-4 text-black bg-white"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded-lg mb-4 text-black bg-white"
            />
            {formData.role === "provider" && (
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                type="text"
                placeholder="Shop name"
                className="w-full p-2 rounded-lg mb-4 text-black bg-white"
              />
            )}

            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded-lg mb-4 text-black  bg-white"
            />

            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 rounded-lg mb-5 text-black  bg-white"
            />

            <button
              onClick={handleRegister}
              className="w-full bg-green-700 p-2 rounded"
            >
              Register
            </button>

            <p className="text-center mt-4 text-blue-300">
              Already a user?{" "}
              <Link to="/login" className="underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
