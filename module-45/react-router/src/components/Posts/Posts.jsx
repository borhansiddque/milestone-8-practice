import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
  const posts = useLoaderData();
  
  return (
    <div className='p-5'>
      <h2 className='bg-amber-300 text-gray-700 inline-block px-3 py-2 rounded font-medium'>Available Posts: {posts.length}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
        {
          posts.map(post => <Post key={post.id} post={post}></Post>)
        }
      </div>
    </div>
  );
};

export default Posts;