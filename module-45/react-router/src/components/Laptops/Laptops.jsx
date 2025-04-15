import React from 'react';
import { useLoaderData } from 'react-router';

const Laptops = () => {
  const laptops = useLoaderData();
  console.log(laptops);
  
  return (
    <div className='w-full h-[70vh] grid place-items-center'>
      <h3 className='text-2xl font-semibold bg-blue-500 text-gray-300 inline-block p-5 rounded-2xl'>This is Laptops</h3>
    </div>
  );
};

export default Laptops;