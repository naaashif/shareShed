import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { Link} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login({ insideRegister }) {
  const [viewPassword, setViewPassword] = useState(false);

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  });

  return (
    <div className="h-screen bg-cover bg-center bg-[url('/loginbg.png')]">
      <div className="w-full h-full flex justify-center items-center bg-white/60">
        <div className="p-10 shadow-white">
          <h1 className="text-3xl font-bold text-white text-center">
            BOOK STORE
          </h1>
          <div
            style={{ width: "400px" }}
            className="bg-[#1C352D] text-white p-5 flex flex-col justify-center items-center my-5 rounded-2xl"
          >
            <div
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              className="border mb-5 flex justify-center  items-center"
            >
              <FaUser className="text-3xl" />
            </div>
            <h2 className="text-2xl">
              {insideRegister ? "Register" : "Login"}
            </h2>
            <form className="my-5 w-full">
              {/* username */}
              
                <input
                  type="text"
                  placeholder="Username"
                  className="bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-5"
                />
              {/* email */}
              {insideRegister && (
              <input
                type="email"
                placeholder="Email"
                className="bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-5"
              />
              )}
              {/* password */}
              <div className="flex items-center">
                <input
                  type={viewPassword ? "text" : "password"}
                  placeholder="Password"
                  className="bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-2"
                />
                {viewPassword ? (
                  <FaEyeSlash
                    onClick={() => setViewPassword(!viewPassword)}
                    className="text-gray-400 cursor-pointer"
                    style={{ marginLeft: "-30px", marginTop: "-10px" }}
                  />
                ) : (
                  <FaEye
                    onClick={() => setViewPassword(!viewPassword)}
                    className="text-gray-400 cursor-pointer"
                    style={{ marginLeft: "-30px", marginTop: "-10px" }}
                  />
                )}
              </div>
              {/* forgot password */}

              <div className="flex justify-between mb-5">
                {!insideRegister && (
                  <button  className="text-xs underline">Forgot Password</button>
                )}
              </div>

              {/* login/register btn */}
              <div className="text-center">
                {insideRegister ? (
                  <button
                    onClick={""}
                    type="button"
                    className="bg-green-700 p-2 w-full rounded"
                  >
                    Register
                  </button>
                ) : (
                  <button
                    onClick={""}
                    type="button"
                    className="bg-green-700 p-2 w-full rounded"
                  >
                    Login
                  </button>
                )}
              </div>
              <div className="my-5 text-center">
                {insideRegister ? (
                  <p className="text-blue-600">
                    Already a user ?{" "}
                    <Link to={"/login"} className="underline ms-5">
                      Login
                    </Link>
                  </p>
                ) : (
                  <p className="text-blue-600">
                    Are you a new user ?{" "}
                    <Link to={"/register"} className="underline ms-5">
                      Register
                    </Link>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
