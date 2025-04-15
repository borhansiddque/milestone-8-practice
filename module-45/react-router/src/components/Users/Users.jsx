import React from "react";
import { useLoaderData } from "react-router";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();

  return (
    <div className="p-4">
      <h2 className="p-2 bg-amber-100 text-gray-800 text-center text-2xl font-medium rounded-lg">Users: {users.length}</h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
