import { defineStore } from 'pinia';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  category: string;
  description?: string;
  price: number;
  image_url: string;
  stock: number;
  active: boolean;
}

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await axios.get('/api/products');
        this.products = response.data;
      } catch (error) {
        this.error = 'Failed to fetch products';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async createProduct(productData: Partial<Product>) {
      try {
        const response = await axios.post('/api/products', productData);
        this.products.unshift(response.data);
        return response.data;
      } catch (error) {
        this.error = 'Failed to create product';
        throw error;
      }
    },

    async updateProduct(productId: number, productData: Partial<Product>) {
      try {
        const response = await axios.patch(`/api/products/${productId}`, productData);
        const index = this.products.findIndex(product => product.id === productId);
        if (index !== -1) {
          this.products[index] = response.data;
        }
      } catch (error) {
        this.error = 'Failed to update product';
        throw error;
      }
    },

    async deleteProduct(productId: number) {
      try {
        await axios.delete(`/api/products/${productId}`);
        this.products = this.products.filter(product => product.id !== productId);
      } catch (error) {
        this.error = 'Failed to delete product';
        throw error;
      }
    },
  },
});