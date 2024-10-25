import React from 'react';
import { Package, ShoppingBag, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">DeliverEase</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">Track</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Products</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <ShoppingBag className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;