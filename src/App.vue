<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-md">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-2">
            <Package class="h-8 w-8 text-blue-600" />
            <span class="text-xl font-bold text-gray-900">DeliverEase</span>
          </div>
          
          <div class="hidden md:flex items-center space-x-8">
            <a href="#" class="text-gray-600 hover:text-blue-600">Track</a>
            <a href="#" class="text-gray-600 hover:text-blue-600">Products</a>
            <a href="#" class="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#" class="text-gray-600 hover:text-blue-600">Contact</a>
          </div>

          <div class="flex items-center space-x-4">
            <button class="p-2 text-gray-600 hover:text-blue-600">
              <ShoppingBag class="h-6 w-6" />
            </button>
            <button class="p-2 text-gray-600 hover:text-blue-600">
              <User class="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>

    <main class="container mx-auto px-4 py-8">
      <section class="mb-12 text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Fast Delivery & Quality Products
        </h1>
        <p class="text-lg text-gray-600 mb-8">
          Your one-stop solution for deliveries and essential products
        </p>
        <SearchBar />
      </section>

      <section class="mb-16">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Schedule a Delivery</h2>
        <DeliveryForm />
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Featured Products</h2>
        <ProductGrid />
      </section>
    </main>

    <footer class="bg-gray-900 text-white py-8 mt-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">About Us</h3>
            <p class="text-gray-400">
              Your trusted partner for reliable deliveries and quality products.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2 text-gray-400">
              <li>Track Delivery</li>
              <li>Shop Products</li>
              <li>Contact Support</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Contact</h3>
            <ul class="space-y-2 text-gray-400">
              <li>support@delivery.com</li>
              <li>1-800-DELIVER</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Package, ShoppingBag, User } from 'lucide-vue-next';
import SearchBar from './components/SearchBar.vue';
import DeliveryForm from './components/DeliveryForm.vue';
import ProductGrid from './components/ProductGrid.vue';
</script>