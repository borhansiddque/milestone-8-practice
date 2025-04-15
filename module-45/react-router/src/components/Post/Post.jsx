import React from "react";
import { Link } from "react-router";

const Post = ({ post }) => {
  const { id, title } = post;

  return (
    <div className="bg-amber-800 text-gray-200 border border-amber-400 rounded-lg p-2">
      <h2>{title}</h2>
      <div className="flex mt-4 items-center gap-2">
        <Link className="btn cursor-pointer" to={`/posts/${id}`}>
          {" "}
          <button className="cursor-pointer">Post Details</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Post;
