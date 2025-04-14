import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'
const Header = () => {
  return (
    <div className='text-center bg-black p-3'>
      <h1 className='text-2xl font-mono bg-gray-200 text-gray-800 rounded-lg'>This is Header</h1>
      <nav className='flex gap-5 items-center justify-center mt-2 font-medium'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobiles">Mobiles</NavLink>
        <NavLink to="/Laptops">Laptops</NavLink>
        <NavLink to="/monitors">Monitors</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;