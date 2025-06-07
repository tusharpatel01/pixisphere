import React from 'react';

const FilterSidebar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-4 rounded shadow w-full md:w-64">
      <h3 className="font-semibold mb-4">Filters</h3>

      <label className="block mb-2 text-sm font-medium">City</label>
      <select
        name="city"
        className="w-full border rounded px-3 py-2"
        value={filters.city}
        onChange={handleChange}
      >
        <option value="">All</option>
        <option value="Bengaluru">Bengaluru</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
      </select>

      {/* Add rating, style, and price slider here */}
    </div>
  );
};

export default FilterSidebar;
