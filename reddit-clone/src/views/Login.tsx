/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <section className="flex flex-col items-center h-screen md:flex-row">
      <div className="flex items-center justify-center w-full h-screen px-6 bg-white md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12">
        <div className="w-full h-100">
          <span className="text-5xl proxima-bold font-bold gradient-text">
            Reddit
          </span>
          <div className="mt-3">
            <label className="block text-sm font-medium leading-relaxed tracking-tighter text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Your Email "
              className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-1 ring-offset-current ring-offset-1"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium leading-relaxed tracking-tighter text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Your Password"
              className="w-full px-4 py-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-1 ring-offset-current ring-offset-1"
            />
          </div>
          <div className="mt-2 text-right">
            <a
              href="#"
              className="text-sm font-semibold leading-relaxed text-gray-700 hover:text-black focus:text-blue-700"
            >
              Forgot Password?
            </a>
          </div>
          <Link className="cursor-pointer" to="/">
            <button className="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-gray-800 rounded-lg hover:bg-gray-600 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ">
              Log in
            </button>
          </Link>
          <hr className="w-full my-6 border-gray-300" />
          <div className="flex justify-enter">
            <button
              type="button"
              className="inline-flex w-full px-4 py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-white border border-gray-300 rounded-lg hover:bg-black hover:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
            >
              <div className="flex items-center justify-center">
                <span className="ml-4">Log in with Google</span>
              </div>
            </button>
            <button
              type="button"
              className="inline-flex px-4 py-3 ml-8 font-semibold text-black transition duration-500 ease-in-out transform bg-white border border-gray-300 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 hover:bg-black focus:bg-gray-100 hover:text-blue-500"
            >
              <div className="flex items-center justify-center">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </div>
            </button>
          </div>
          <p className="mt-8 text-center">
            Need an account?
            <a
              href="#"
              className="font-semibold text-blue-500 hover:text-blue-700 ml-2"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
      <div className="hidden w-full h-screen bg-white lg:block md:w-1/3 lg:w-2/3">
        <img
          src="https://www.thebalance.com/thmb/JyaUrq-ucrDj1ZQmz_lMZj5V0jY=/3870x2575/filters:fill(auto,1)/Financial-Ratio-Categories-56a091f03df78cafdaa2d0d5.jpg"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
