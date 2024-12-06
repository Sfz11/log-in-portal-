import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../Api/Auth/authApi";
import useProfile from "../Context/useProfile";

const Signup = () => {
  const { login } = useProfile();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    try {
      const res = await authApi.signup(data);
      toast.success(res?.data?.message || "Signup successful");
      login(res?.data?.token);
      navigate("/");
    } catch (error) {
      console.log("error", error);
      toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="relative py-4 min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.3), transparent 70%), 
                            radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.15), transparent 50%)`,
        }}
      ></motion.div>

      <motion.div
        className="absolute top-10 left-10 w-36 h-36 rounded-full bg-white opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white opacity-30"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white opacity-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-28 h-28 rounded-full bg-white opacity-25"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`relative z-10 rounded-lg shadow-lg px-8 py-5 w-full max-w-md bg-white text-gray-800`}
      >
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Create Your Account
        </h2>
        <p className="text-center mb-6">Join the chat revolution!</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Enter your username"
              className={`mt-1 text-gray-700 block w-full border-b-2 focus:border-indigo-500 outline-none border-gray-300`}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className={`mt-1 text-gray-700 block w-full border-b-2 focus:border-indigo-500 outline-none border-gray-300 `}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className={`mt-1 text-gray-700 block w-full border-b-2 focus:border-indigo-500 outline-none border-gray-300 `}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              required
              maxLength={10}
              placeholder="Enter your phone number"
              className={`mt-1 text-gray-700 block w-full border-b-2 focus:border-indigo-500 outline-none border-gray-300`}
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 rounded-md text-lg font-semibold transition bg-purple-600 hover:bg-purple-700 text-white"
            `}
          >
            Sign Up
          </button>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className={`hover:underline text-indigo-600`}
            >
              Login here
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
