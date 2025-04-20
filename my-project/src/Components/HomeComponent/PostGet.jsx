import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { Link } from "react-router-dom";

export const PostGet = () => {
  const {
    handlePrev,
    currentPage,
    handleNext,
    currentPosts,
    totalFilteredPages,
  } = useContext(AppContext);

  return (
    <>
      <div className=' p-6'></div>
      <div className='px-14 mb-10 w-[90%] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {currentPosts.length > 0 ? (
          currentPosts.map((el, i) => (
            <Link key={i} to={`/postdetail/${el.id || i}`}>
              <div className='bg-white flex flex-col h-full dark:bg-black dark:text-white shadow-lg dark:hover:shadow-gray-300 dark:hover:shadow-md rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
                <div className='relative'>
                  <img
                    className='w-full h-48 object-cover'
                    src={el.image}
                    alt={`${el.title}`}
                  />
                </div>
                <div className='p-4 flex-grow'>
                  <h2 className='text-lg font-bold my-2'>{el.title}</h2>
                  <span
                    className='text-sm text-slate-700 font-semibold'
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: 2,
                    }}
                  >
                    {el.description}
                  </span>
                  <p className='text-xs text-slate-500 font-medium mt-2'>
                    {el.price}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className='text-center col-span-full text-gray-500 font-medium text-lg'>
            No posts found.
          </p>
        )}
      </div>
      {/* Prev / Page Number / Next */}
      <div className='flex justify-center mt-8 mb-10 items-center gap-4 text-lg font-semibold'>
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className='bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded disabled:opacity-50'
        >
          Prev
        </button>

        {/* Current Page Number */}
        <span className='px-4 py-2'>{currentPage}</span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalFilteredPages}
          className='bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </>
  );
};
