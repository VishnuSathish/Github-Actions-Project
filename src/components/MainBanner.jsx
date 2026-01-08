import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="relative">
      {/* Banner image */}
      <img
        src={assets.main_banner}
        alt="main banner"
        className="w-full h-120 p-20 hidden md:block"
      />
      <img
        src={assets.main_banner}
        alt="main banner"
        className="w-full p-10 md:hidden"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white gap-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold drop-shadow-lg leading-snug px-4">
          Freshness you can trust!
        </h1>

        <div className="flex gap-4">
          {/* Hidden on mobile, visible on md+ */}
          <Link
            to="/deals"
            className="hidden md:inline bg-green-600 px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            Explore Deals
          </Link>

          {/* Visible everywhere */}
          <Link
            to="/shop"
            className="bg-white text-green-600 px-6 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
