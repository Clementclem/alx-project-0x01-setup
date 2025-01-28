import React from 'react';

const PostCard: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default PostCard;

