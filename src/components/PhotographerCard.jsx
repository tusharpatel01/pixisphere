import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const PhotographerCard = ({ photographer }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 w-full max-w-sm">
      <img
        src={photographer.profilePic}
        alt={photographer.name}
        className="h-48 w-full object-cover rounded"
      />
      <div className="mt-3 space-y-1">
        <h2 className="text-lg font-semibold">{photographer.name}</h2>
        <p className="text-sm flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          {photographer.location}
        </p>
        <p className="text-sm text-gray-800">₹{photographer.price} onwards</p>
        <p className="text-yellow-500 flex items-center">
          <Star className="h-4 w-4 mr-1" />
          {photographer.rating}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {photographer.tags.map((tag, idx) => (
            <span key={idx} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/photographer/${photographer.id}`}
          className="mt-3 inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default PhotographerCard;
