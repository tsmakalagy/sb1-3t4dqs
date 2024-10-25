import React from 'react';
import { Users, Package, DollarSign, TrendingUp } from 'lucide-react';
import DeliveryRates from './DeliveryRates';
import OrdersList from './OrdersList';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Orders', value: '156', icon: Package, change: '+12%' },
    { title: 'Active Deliveries', value: '32', icon: TrendingUp, change: '+8%' },
    { title: 'Total Revenue', value: '$12,426', icon: DollarSign, change: '+23%' },
    { title: 'Total Customers', value: '892', icon: Users, change: '+18%' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <stat.icon className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-sm text-green-600 mt-2">{stat.change} from last month</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DeliveryRates />
        <OrdersList />
      </div>
    </div>
  );
};

export default AdminDashboard;