import React from "react";
import { Building2, ShieldAlert, ClipboardList, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Property Listings",
    description:
      "Comprehensive listings of properties available for sale or rent.",
  },
  {
    icon: ShieldAlert,
    title: "Legal Assistance",
    description: "Expert legal guidance for all real estate transactions.",
  },
  {
    icon: ClipboardList,
    title: "Property Management",
    description:
      "Full-service management to maintain and oversee your properties.",
  },
  {
    icon: Lightbulb,
    title: "Market Analysis",
    description:
      "In-depth market insights to help you make informed decisions.",
  },
];

export const Services = () => (
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8">
        Services for Real Estate Agencies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <service.icon className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
