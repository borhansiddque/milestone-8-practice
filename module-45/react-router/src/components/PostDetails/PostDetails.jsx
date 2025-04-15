import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }


  return (
    <div className="bg-amber-200 w-full text-gray-900 text-center py-3 px-5">
      <div className="inline-block bg-amber-700 text-gray-200 px-2 rounded">
        Post: {post.id}
      </div>
      <h2 className="text-2xl">{post.title}</h2>
      <p className="mt-5">{post.body}</p>

      <button className="btn mt-5" onClick={handleBack}>
        Back
      </button>
    </div>
  );
};

export default PostDetails;
