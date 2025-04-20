import React, { useState } from "react";
import { post } from "../../Data/db";

export const Post = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ingredients: "",
    image: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new post data
    const newPost = {
      ...formData,
      ingredients: formData.ingredients
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      price: Number(formData.price),
      id: post.length + 1,
    };

    post.push(newPost);

    // Reset form data after submitting
    setFormData({
      title: "",
      description: "",
      ingredients: "",
      image: "",
      price: "",
    });

    alert("Post submitted successfully!");
  };

  return (
    <div className='max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-lg'>
      <h1 className='text-2xl font-semibold mb-6 text-center'>Post Data</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label
            htmlFor='image'
            className='block text-sm font-medium text-gray-700'
          >
            Image URL
          </label>
          <input
            name='image'
            id='image'
            placeholder='Enter Img Url'
            value={formData.image}
            onChange={handleChange}
            className='mt-2 p-2 w-full border rounded-md focus:ring-2 focus:ring-indigo-500'
          />
        </div>
        <div>
          <label
            htmlFor='title'
            className='block text-sm font-medium text-gray-700'
          >
            Title
          </label>
          <input
            name='title'
            id='title'
            placeholder='Enter Title'
            value={formData.title}
            onChange={handleChange}
            className='mt-2 p-2 w-full border rounded-md focus:ring-2 focus:ring-indigo-500'
          />
        </div>
        <div>
          <label
            htmlFor='description'
            className='block text-sm font-medium text-gray-700'
          >
            Description
          </label>
          <input
            name='description'
            id='description'
            placeholder='Enter Description'
            value={formData.description}
            onChange={handleChange}
            className='mt-2 p-2 w-full border rounded-md focus:ring-2 focus:ring-indigo-500'
          />
        </div>
        <div>
          <label
            htmlFor='ingredients'
            className='block text-sm font-medium text-gray-700'
          >
            Ingredients (comma separated)
          </label>
          <input
            name='ingredients'
            id='ingredients'
            placeholder='Enter Ingredients'
            value={formData.ingredients}
            onChange={handleChange}
            className='mt-2 p-2 w-full border rounded-md focus:ring-2 focus:ring-indigo-500'
          />
        </div>
        <div>
          <label
            htmlFor='price'
            className='block text-sm font-medium text-gray-700'
          >
            Price
          </label>
          <input
            name='price'
            id='price'
            placeholder='Enter Price'
            type='number'
            value={formData.price}
            onChange={handleChange}
            className='mt-2 p-2 w-full border rounded-md focus:ring-2 focus:ring-indigo-500'
          />
        </div>
        <div>
          <button
            type='submit'
            className='w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
