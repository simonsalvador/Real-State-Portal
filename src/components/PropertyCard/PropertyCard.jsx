import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faSquare } from "@fortawesome/free-solid-svg-icons";

const PropertyCard = ({ property, setSelectedProperty }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-2">
          {property.type} • {property.transaction}
        </p>
        <p className="font-bold text-lg mb-4">
          ${property.price.toLocaleString()}
        </p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faBed} className="text-gray-400 mr-1" />
            <span>{property.beds}</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faBath} className="text-gray-400 mr-1" />
            <span>{property.baths}</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faSquare} className="text-gray-400 mr-1" />
            <span>{property.area} m²</span>
          </div>
        </div>
        <button
          onClick={() => setSelectedProperty(property)}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
