import React from 'react';

const SortDropdown = ({ sortOption, setSortOption }) => {
  return (
    <div className="mb-4 ">
      <label className="block text-sm font-medium mb-1 ml-2">Sort By</label>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="border px-3 py-2 rounded ml-2"
      >
        <option value="">Select</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="ratingHighLow">Rating: High to Low</option>
        <option value="recent">Recently Added</option>
      </select>
    </div>
  );
};

export default SortDropdown;
