import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-gray-100 p-4 rounded-lg w-full max-w-sm">
      <div className="bg-gray-300 h-48 w-full rounded"></div>
      <div className="h-4 bg-gray-300 rounded mt-3 w-3/4"></div>
      <div className="h-3 bg-gray-300 rounded mt-2 w-1/2"></div>
      <div className="h-3 bg-gray-300 rounded mt-2 w-2/3"></div>
    </div>
  );
};

export default SkeletonCard;
