import React, { useState } from 'react';
import { MapPin, Package as PackageIcon } from 'lucide-react';
import { calculateDeliveryCost } from '../utils/deliveryCalculator';

const DeliveryForm = () => {
  const [formData, setFormData] = useState({
    pickupAddress: '',
    deliveryAddress: '',
    packageType: '',
    weight: '',
    dimensions: '',
    specialInstructions: '',
    isExpress: false
  });

  const [cost, setCost] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate distance calculation (in a real app, this would use a mapping API)
    const simulatedDistance = 15; // km
    
    const deliveryCost = calculateDeliveryCost({
      distance: simulatedDistance,
      weight: parseFloat(formData.weight) || 0,
      isExpress: formData.isExpress,
      baseRate: 10,
      perKmRate: 0.5,
      weightMultiplier: 1.2,
      expressMultiplier: 1.5
    });
    
    setCost(deliveryCost);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Pickup Address
          </label>
          <div className="relative">
            <input
              type="text"
              name="pickupAddress"
              value={formData.pickupAddress}
              onChange={handleChange}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter pickup location"
            />
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Delivery Address
          </label>
          <div className="relative">
            <input
              type="text"
              name="deliveryAddress"
              value={formData.deliveryAddress}
              onChange={handleChange}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter delivery location"
            />
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Package Type
          </label>
          <select
            name="packageType"
            value={formData.packageType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select package type</option>
            <option value="document">Document</option>
            <option value="small">Small Package</option>
            <option value="medium">Medium Package</option>
            <option value="large">Large Package</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Weight (kg)
          </label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter package weight"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Special Instructions
          </label>
          <textarea
            name="specialInstructions"
            value={formData.specialInstructions}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Any special handling instructions?"
          />
        </div>

        <div className="md:col-span-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="isExpress"
              checked={formData.isExpress}
              onChange={handleChange}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Express Delivery</span>
          </label>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Calculate Delivery Cost
        </button>
      </div>

      {cost !== null && (
        <div className="mt-4 p-4 bg-blue-50 rounded-md">
          <p className="text-lg font-semibold text-blue-900">
            Estimated Delivery Cost: ${cost}
          </p>
          <p className="text-sm text-blue-700 mt-1">
            This estimate includes base rate, distance, weight, and {formData.isExpress ? 'express delivery' : 'standard delivery'} charges.
          </p>
        </div>
      )}
    </form>
  );
};

export default DeliveryForm;