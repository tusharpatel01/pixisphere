import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PhotographerProfile = () => {
  const { id } = useParams();
  const [photographer, setPhotographer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotographer = async () => {
      setLoading(true);
      const res = await fetch(`http://localhost:3500/photographers/${id}`);
      const data = await res.json();
      console.log('Fetched photographer data:', data);
      
      setPhotographer(data);
      setLoading(false);
    };
    fetchPhotographer();
  }, [id]);

  if (loading) return <p className="p-4">Loading profile...</p>;

  if (!photographer) return <p className="p-4">Photographer not found.</p>;

  return (
    <div className="min-h-screen bg-gray-50 mt-30">
    <Navbar/>
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <img src={photographer.profilePic} alt={photographer.name} className="w-64 h-64 object-cover rounded" />
        <div>
          <h1 className="text-2xl font-bold">{photographer.name}</h1>
          <p className="text-gray-600 mt-1">{photographer.bio}</p>
          <p className="mt-2 text-sm text-gray-700">
            <strong>Location:</strong> {photographer.location}
          </p>
          <p className="text-sm"><strong>Price:</strong> ₹{photographer.price}</p>
          <p className="text-sm"><strong>Rating:</strong> {photographer.rating}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {photographer.styles.map((style, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {style}
              </span>
            ))}
            {photographer.tags.map((tag, i) => (
              <span key={i} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Portfolio</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photographer.portfolio.map((img, i) => (
            <img key={i} src={img} alt={`Portfolio ${i}`} className="rounded shadow object-cover h-40 w-full" />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Reviews</h2>
        {photographer.reviews.map((review, i) => (
          <div key={i} className="border p-3 rounded mb-2">
            <p className="text-sm font-medium">{review.name}</p>
            <p className="text-yellow-500 text-sm">Rating: {review.rating}</p>
            <p className="text-gray-700 text-sm">{review.comment}</p>
            <p className="text-gray-400 text-xs">{review.date}</p>
          </div>
        ))}
      </div>

      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Send Inquiry
      </button>
    </div>
    </div>
  );
};

export default PhotographerProfile;
