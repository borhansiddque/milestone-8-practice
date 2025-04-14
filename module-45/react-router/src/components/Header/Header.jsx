import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className='text-center bg-black p-3'>
      <h1 className='text-2xl'>This is Header</h1>
      <nav className='flex gap-5 items-center justify-center mt-2'>
        <Link to="/">Home</Link>
        <Link to="/mobiles">Mobiles</Link>
        <Link to="/Laptops">Laptops</Link>
        <Link to="/monitors">Monitors</Link>
      </nav>
    </div>
  );
};

export default Header;