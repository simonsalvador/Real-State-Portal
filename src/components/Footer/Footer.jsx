import React from "react";

export const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            Tandil Real Estate is your trusted partner for finding the perfect
            property in Tandil.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/properties" className="text-gray-400 hover:text-white">
                Properties
              </a>
            </li>
            <li>
              <a href="/agencies" className="text-gray-400 hover:text-white">
                Agencies
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">123 Main St, Tandil, Argentina</p>
          <p className="text-gray-400">Phone: +54 123 456 7890</p>
          <p className="text-gray-400">Email: info@tandilrealestate.com</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
