import React from "react";
import { FaVideo, FaImages, FaFilm, FaCameraRetro } from "react-icons/fa";

function AppNav() {
  return (
    <div>
      <nav className="flex justify-center p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Menu items */}
          <div className="flex space-x-6">
            {/* Reels */}
            <a
              href="#reels"
              className="text-white text-center hover:text-blue-500 "
            >
              <FaFilm className="mx-auto text-3xl" />
              <span className="block mt-2">Reels</span>
            </a>

            {/* Posts */}
            <a
              href="#posts"
              className="text-white text-center  hover:text-blue-500"
            >
              <FaImages className="mx-auto text-3xl" />
              <span className="block mt-2">Posts</span>
            </a>

            {/* Videos */}
            <a
              href="#videos"
              className="text-white text-center  hover:text-blue-500"
            >
              <FaVideo className="mx-auto text-3xl" />
              <span className="block mt-2">Videos</span>
            </a>

            {/* Stories */}
            <a
              href="#stories"
              className="text-white text-center  hover:text-blue-500"
            >
              <FaCameraRetro className="mx-auto text-3xl" />
              <span className="block mt-2">Stories</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AppNav;
