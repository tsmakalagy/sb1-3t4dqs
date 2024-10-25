import React from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Pain Relief Medicine',
    category: 'Medicine',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    name: 'Brake Pads',
    category: 'Car Parts',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    name: 'First Aid Kit',
    category: 'Medicine',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 4,
    name: 'Oil Filter',
    category: 'Car Parts',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1486262322291-6f204be73ed9?auto=format&fit=crop&q=80&w=400'
  }
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md text-sm">
              {product.category}
            </span>
          </div>
          
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">${product.price}</span>
              <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;