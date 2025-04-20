import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { AppContext } from "../Context/AppContext";

export const NavBar = () => {
  const { setSearchInput, searchInput, handleSearchClick } =
    useContext(AppContext);

  return (
    <nav className='bg-white dark:bg-gray-900 shadow-sm px-6 py-4 sticky top-0 z-50 w-full'>
      <div className='max-w-7xl mx-auto w-full'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-10'>
          <div className='flex justify-between sm:justify-start items-center sm:gap-10 mb-3 sm:mb-0'>
            <Link
              to='/'
              className='text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 transition'
            >
              Home
            </Link>

            <Link
              to='/createpost'
              className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm sm:text-base font-medium transition'
            >
              Create Post
            </Link>
          </div>

          <div className='w-full sm:w-[350px]'>
            <div className='flex items-center border border-gray-300 dark:border-gray-700 rounded-full px-3 py-1 bg-gray-100 dark:bg-gray-800 w-full'>
              <input
                type='text'
                placeholder='Search Coffee'
                className='bg-transparent flex-grow text-sm sm:text-base px-2 outline-none text-gray-800 dark:text-white placeholder-gray-500'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                onClick={handleSearchClick}
                className='text-gray-600 dark:text-gray-300 hover:text-blue-500 transition'
              >
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
