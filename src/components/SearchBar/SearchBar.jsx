import { useState } from 'react';
import { SearchIcon } from 'lucide-react';

const SearchBar = ({ onFilterToggle }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <input type="text" placeholder="Location" className="flex-grow p-2 border rounded" />
      <select className="p-2 border rounded">
        <option value="">Property Type</option>
        <option value="house">House</option>
        <option value="apartment">Apartment</option>
        <option value="land">Land</option>
      </select>
      <select className="p-2 border rounded">
        <option value="">Transaction Type</option>
        <option value="sale">Sale</option>
        <option value="rent">Rent</option>
        <option value="auction">Auction</option>
      </select>
      <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="p-2 border rounded bg-blue-500 text-white">
        {isFilterOpen ? 'Hide Filters' : 'More Filters'}
      </button>
      <button className="w-full md:w-auto p-2 border rounded bg-blue-500 text-white flex items-center">
        <SearchIcon className="mr-2 h-4 w-4" /> Search
      </button>
      {isFilterOpen && <Filters />}
    </div>
  );
};

const Filters = () => (
  <div className="mb-8 p-6 border rounded bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
        <input type="range" min="0" max="1000000" step="10000" className="w-full" />
        <div className="flex justify-between mt-2">
          <span>$0</span>
          <span>$1,000,000+</span>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
        <select className="p-2 border rounded">
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
        <select className="p-2 border rounded">
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Area (m²)</label>
        <input type="range" min="0" max="500" step="10" className="w-full" />
        <div className="flex justify-between mt-2">
          <span>0 m²</span>
          <span>500+ m²</span>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
        <div className="space-y-2">
          <div className="flex items-center">
            <input type="checkbox" id="parking" className="mr-2" />
            <label htmlFor="parking">Parking</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="pool" className="mr-2" />
            <label htmlFor="pool">Pool</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="garden" className="mr-2" />
            <label htmlFor="garden">Garden</label>
          </div>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
        <select className="p-2 border rounded">
          <option value="relevance">Relevance</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="date">Newest First</option>
        </select>
      </div>
    </div>
  </div>
);

export default SearchBar;
