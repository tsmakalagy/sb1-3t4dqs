import React from 'react';
import { Package, MapPin } from 'lucide-react';

const orders = [
  {
    id: '1',
    customer: 'John Doe',
    pickup: '123 Main St',
    delivery: '456 Oak Ave',
    status: 'In Progress',
    cost: 45.99
  },
  {
    id: '2',
    customer: 'Jane Smith',
    pickup: '789 Pine Rd',
    delivery: '321 Elm St',
    status: 'Pending',
    cost: 32.50
  },
  {
    id: '3',
    customer: 'Mike Johnson',
    pickup: '159 Cedar Ln',
    delivery: '753 Maple Dr',
    status: 'Completed',
    cost: 28.75
  }
];

const OrdersList = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Orders</h2>
      
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-900">{order.customer}</span>
              <span className={`px-2 py-1 rounded-full text-sm ${
                order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                order.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {order.status}
              </span>
            </div>
            
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>From: {order.pickup}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>To: {order.delivery}</span>
              </div>
            </div>
            
            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm text-gray-600">Order #{order.id}</span>
              <span className="font-semibold text-blue-600">${order.cost}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersList;