import React, { useState } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";

const Properties = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const properties = [
    {
      id: 1,
      title: "Modern Apartment",
      type: "Apartment",
      transaction: "Sale",
      price: 180000,
      beds: 2,
      baths: 1,
      area: 75,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Family House",
      type: "House",
      transaction: "Sale",
      price: 350000,
      beds: 4,
      baths: 3,
      area: 200,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Cozy Studio",
      type: "Studio",
      transaction: "Rent",
      price: 800,
      beds: 1,
      baths: 1,
      area: 40,
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <main className="container mx-auto px-4">
      <h2 className="text-2xl font-bold my-8">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            setSelectedProperty={setSelectedProperty}
          />
        ))}
      </div>
    </main>
  );
};

export default Properties;
