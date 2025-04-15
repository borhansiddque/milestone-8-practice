import React from "react";
import { Link, useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, company, email, phone, website, address } = user;
   
  return (
    <div className="bg-amber-200 text-gray-900 p-5 rounded-xl m-5 w-full space-y-3">
      <h4 className="text-2xl text-center bg-amber-800 text-gray-200 py-1 px-2 inline-block rounded">
        {name}
      </h4>
      <div className="space-y-3">
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: <span className="underline">{website}</span></p>
        <p className="font-semibold">Company: {company.name}</p>
        <p><span className="font-semibold">Address:</span> {address.street} | {address.city} | {address.zipcode}</p>
      </div>
      <Link className="btn" to={'/users'}>Back User Page</Link>
    </div>
  );
};
export default UserDetails;
