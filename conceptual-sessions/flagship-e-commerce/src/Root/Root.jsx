import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const Root = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className="w-[90%] mx-auto min-h-[calc(100vh-285px)]">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default Root;