import React from 'react';
import { Search, Package, Navigation, ShoppingBag, Pill, Car } from 'lucide-react';
import DeliveryForm from './components/DeliveryForm';
import ProductGrid from './components/ProductGrid';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import AdminDashboard from './components/admin/AdminDashboard';

function App() {
  // For demo purposes, let's add a simple admin toggle
  const [isAdmin, setIsAdmin] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {isAdmin ? (
        <AdminDashboard />
      ) : (
        <main className="container mx-auto px-4 py-8">
          {/* Admin Toggle (Demo purposes) */}
          <button
            onClick={() => setIsAdmin(true)}
            className="mb-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
          >
            Switch to Admin View
          </button>

          {/* Hero Section */}
          <section className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Fast Delivery & Quality Products
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your one-stop solution for deliveries and essential products
            </p>
            <SearchBar />
          </section>

          {/* Delivery Form Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Schedule a Delivery</h2>
            <DeliveryForm />
          </section>

          {/* Featured Products */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Products</h2>
            <ProductGrid />
          </section>
        </main>
      )}

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                Your trusted partner for reliable deliveries and quality products.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Track Delivery</li>
                <li>Shop Products</li>
                <li>Contact Support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>support@delivery.com</li>
                <li>1-800-DELIVER</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;