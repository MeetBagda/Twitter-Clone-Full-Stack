import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import twillerBg from "../assets/twiller-bg.jpg";
import { useUserAuth } from "../context/userAuthContext";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useUserAuth();
  const { googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await signIn(email, password);
      const user = userCredential.user;

      await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid: user.uid,
          username: username,
          name: name,
          email: email,
        }),
      });
       console.log("User data sent to backend successfully");
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="@username"
              className="w-full p-2 border rounded border-gray-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Full Name"
              className="w-full p-2 border rounded border-gray-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
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
            Sign Up
          </button>
          <div className="mt-4">
            <button
            onClick={handleGoogleSignIn}
              type="button"
              className="w-full border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-5 h-5 mr-2"
              >
                <g>
                  <path d="M20.68 12.988c0-.795-.07-1.57-.195-2.324H12.008v4.362h5.342c-.238 1.17-.94 2.13-2.027 2.773v3.548h3.248c1.896-1.74 2.98-4.288 2.98-7.359zM12.007 5c-3.953 0-7.173 3.207-7.173 7.167 0 3.96 3.22 7.167 7.173 7.167 1.482 0 2.84-.443 3.905-1.194l-2.707-2.094c-.738.5-1.864.81-2.918.81-2.412 0-4.433-1.628-5.157-3.826H5.375v-3.293h2.706c.245-1.055.92-1.95 1.984-2.448 1.125-.494 2.452-.754 3.842-.754z"></path>
                </g>
              </svg>
              Sign in with Google
            </button>
          </div>
          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;