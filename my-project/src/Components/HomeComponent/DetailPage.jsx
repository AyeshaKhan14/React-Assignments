import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { useParams, Link } from "react-router-dom";

export const DetailPage = () => {
  const { id } = useParams(); // Get the ID from the URL
  const { currentPosts } = useContext(AppContext);

  // Find the post with the given ID
  const postData = currentPosts.find((el) => el.id === parseInt(id));

  if (!postData) {
    return (
      <div className='text-center'>
        <p className='text-xl text-red-500'>Post not found</p>
      </div>
    );
  }

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <div className='bg-white dark:bg-black shadow-lg rounded-lg overflow-hidden'>
        <div className='relative'>
          <img
            className='w-full h-[120px] md:h-[350px] object-cover'
            src={postData.image}
            alt={postData.title}
          />
        </div>
        <div className='p-6'>
          <h2 className='text-2xl font-bold mb-4'>{postData.title}</h2>
          <p className='text-sm text-slate-700 mb-4'>{postData.description}</p>
          <p className='text-xs text-slate-500 font-medium mt-2'>
            Price: ${postData.price}
          </p>

          {/* Ingredients as Buttons */}
          <div className='mt-4'>
            <h3 className='text-lg font-semibold mb-2'>Ingredients:</h3>
            <div className='flex flex-wrap gap-2'>
              {postData.ingredients.map((ingredient, index) => (
                <button
                  key={index}
                  className='bg-blue-500 text-white text-sm md:text-lg px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200'
                >
                  {ingredient}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Link to='/' className='mt-4 inline-block text-blue-600'>
        Back to Posts
      </Link>
    </div>
  );
};
