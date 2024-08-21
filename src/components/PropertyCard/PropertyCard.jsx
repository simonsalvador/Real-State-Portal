import React from 'react';

const PropertyCard = ({ property, setSelectedProperty }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-2">{property.type} • {property.transaction}</p>
        <p className="font-bold text-lg mb-4">${property.price.toLocaleString()}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <svg className="h-5 w-5 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 112 0v4a1 1 0 001 1h4a1 1 0 010 2h-4a1 1 0 00-1 1v4a1 1 0 11-2 0v-4a1 1 0 00-1-1H3a1 1 0 010-2h4a1 1 0 001-1z" /></svg>
            <span>{property.beds}</span>
          </div>
          <div className="flex items-center">
            <svg className="h-5 w-5 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v8m-6-8h12a2 2 0 012 2v2a2 2 0 01-2 2h-4l-2 2v-2H6a2 2 0 01-2-2v-2a2 2 0 012-2z" /></svg>
            <span>{property.baths}</span>
          </div>
          <div className="flex items-center">
            <svg className="h-5 w-5 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v7m7-7h-7m0 0L5 12m7-7l7 7M5 12h7m0 0v7m0-7L5 19" /></svg>
            <span>{property.area} m²</span>
          </div>
        </div>
        <button onClick={() => setSelectedProperty(property)} className="bg-blue-600 text-white px-4 py-2 rounded w-full">View Details</button>
      </div>
    </div>
  );
};

export default PropertyCard;
