import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full p-2">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by name, tag or location"
        className="w-full border px-4 py-2 rounded shadow-sm"
      />
    </div>
  );
};

export default SearchBar;
