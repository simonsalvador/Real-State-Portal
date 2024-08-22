import React from "react";

const Header = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <svg
            className="h-8 w-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M13 5h6a2 2 0 012 2v6m-5 9a2 2 0 01-2 2H7a2 2 0 01-2-2m1-9h8a2 2 0 012 2v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5a2 2 0 012-2z"
            />
          </svg>
          <h1 className="text-2xl font-bold text-gray-800">
            Tandil Real Estate
          </h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="/" className="text-gray-600 hover:text-blue-600">
            Home
          </a>
          <a href="/buy" className="text-gray-600 hover:text-blue-600">
            Buy
          </a>
          <a href="/rent" className="text-gray-600 hover:text-blue-600">
            Rent
          </a>
          <a href="/sell" className="text-gray-600 hover:text-blue-600">
            Sell
          </a>
          <a href="/agencies" className="text-gray-600 hover:text-blue-600">
            Agencies
          </a>
        </nav>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
