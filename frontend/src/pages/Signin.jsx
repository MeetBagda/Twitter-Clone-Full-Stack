import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import twillerBg from "../assets/twiller-bg.jpg";
import { useUserAuth } from "../context/userAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
    const { googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
       navigate("/");

    } catch (error) {
      setError(error.message);
       window.alert(error.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/")
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="flex h-screen">
      {/* Left Side (Image) */}
      <div className="w-1/2 bg-blue-200 relative">
        <img
          src={twillerBg}
          alt="Twitter Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>

      {/* Right Side (Form) */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <div className="text-left flex flex-row gap-5 items-center justify-center">
          <div>
            <svg
              viewBox="0 0 24 25"
              aria-hidden="true"
              className="w-15 h-15 fill-blue-500"
            >
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.532-.896.533-1.898.907-2.946 1.11-.847-.89-2.064-1.447-3.377-1.447-2.54 0-4.596 2.056-4.596 4.596 0 .36.042.71.12 1.03-3.825-.19-7.213-2.02-9.486-4.796-.4.69-.63 1.49-.63 2.38 0 1.59 1.38 3.106 3.47 3.96-.802-.025-1.56-.247-2.228-.616v.057c0 2.236 1.59 4.1 3.7 4.52-.39.11-.80.17-1.23.17-.29 0-.57-.03-.83-.08.57 1.83 2.3 3.16 4.3 3.2-1.57 1.23-3.6 1.97-5.77 1.97-.37 0-.73-.02-1.09-.06 2.02 1.3 4.42 2.07 7.01 2.07 8.41 0 13.034-6.86 13.034-12.86 0-.19-.01-.38-.01-.57.9-.65 1.68-1.47 2.29-2.45z"></path>
              </g>
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-bold mt-4">Happening now</h2>
            <p className="text-xl mb-8">Join twiller today</p>
          </div>
        </div>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full p-2 border rounded border-gray-300"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 border rounded border-gray-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log In
          </button>
          <div className="mt-4">
            <button
            onClick={handleGoogleSignIn}
              type="button"
              className="w-full border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="mr-2">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
              Sign in with Google
            </button>
          </div>
          <p className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;