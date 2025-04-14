import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
  const {id, name, email, website, address} =user;
  
  return (
    <div className='bg-amber-300 text-gray-900 p-4 border-2 border-amber-700 rounded-lg'>
      <h2 className='font-semibold text-2xl'>{name}</h2>
      <p>Email: {email}</p>
      <p>Website: {website}</p>
      <p>City: {address.city}</p>
      <Link to={`/users/${id}`} className='btn'>View Details</Link>
    </div>
  );
};

export default User;