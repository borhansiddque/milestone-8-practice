import React from "react";
import { useLoaderData } from "react-router";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();

  return (
    <div className="p-4">
      <h2>Hello from Users</h2>
      <div className="mt-10 grid grid-cols-2 gap-3">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
