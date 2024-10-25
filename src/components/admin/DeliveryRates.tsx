import React, { useState } from 'react';
import { calculateDeliveryCost } from '../../utils/deliveryCalculator';

const DeliveryRates = () => {
  const [rates, setRates] = useState({
    baseRate: 10,
    perKmRate: 0.5,
    weightMultiplier: 1.2,
    expressMultiplier: 1.5
  });

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRates({
      ...rates,
      [e.target.name]: parseFloat(e.target.value)
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Delivery Rates</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Base Rate ($)
          </label>
          <input
            type="number"
            name="baseRate"
            value={rates.baseRate}
            onChange={handleRateChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Per Kilometer Rate ($)
          </label>
          <input
            type="number"
            name="perKmRate"
            value={rates.perKmRate}
            onChange={handleRateChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Weight Multiplier
          </label>
          <input
            type="number"
            name="weightMultiplier"
            value={rates.weightMultiplier}
            onChange={handleRateChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Express Delivery Multiplier
          </label>
          <input
            type="number"
            name="expressMultiplier"
            value={rates.expressMultiplier}
            onChange={handleRateChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            step="0.1"
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryRates;