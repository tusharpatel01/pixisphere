import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhotographerCard from '../components/PhotographerCard';
import FilterSidebar from '../components/FilterSidebar';
import SearchBar from '../components/SearchBar';
import SortDropdown from '../components/SortDropdown';
import SkeletonCard from '../components/SkeletonCard';
// import { fetchPhotographers } from '../redux/photographersSlice';
import { fetchPhotographers } from '../redux/photographerSlice';

const CategoryListing = () => {
  const dispatch = useDispatch();
  const { photographers, loading } = useSelector((state) => state.photographers);

  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    city: '',
  });
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    dispatch(fetchPhotographers());
  }, [dispatch]);

  const filterAndSortPhotographers = () => {
    let filtered = [...photographers];

    if (filters.city) {
      filtered = filtered.filter((p) => p.location === filters.city);
    }

    if (searchQuery) {
      const lowerSearch = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(lowerSearch) ||
          p.location.toLowerCase().includes(lowerSearch) ||
          p.tags.some((tag) => tag.toLowerCase().includes(lowerSearch))
      );
    }

    if (sortOption === 'priceLowHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'ratingHighLow') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'recent') {
      filtered.sort((a, b) => b.id - a.id); // simulate recent by ID
    }

    return filtered;
  };

  const result = filterAndSortPhotographers();

  return (
    <div className="flex flex-col md:flex-row p-4 gap-4 pt-20">
      <div className="md:w-1/4">
        <FilterSidebar filters={filters} setFilters={setFilters} />
      </div>
      <div className="md:w-3/4 ">
        <SearchBar  searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : result.map((photographer) => (
                <PhotographerCard key={photographer.id} photographer={photographer} />
              ))}
          {!loading && result.length === 0 && (
            <p className="text-gray-600 col-span-full">No photographers found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryListing;
