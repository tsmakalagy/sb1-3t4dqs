import { defineStore } from 'pinia';
import axios from 'axios';

interface Order {
  id: number;
  pickup_address: string;
  delivery_address: string;
  package_type: string;
  weight: number;
  special_instructions?: string;
  is_express: boolean;
  distance: number;
  total_cost: number;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
}

export const useOrderStore = defineStore('order', {
  state: () => ({
    orders: [] as Order[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchOrders() {
      this.loading = true;
      try {
        const response = await axios.get('/api/orders');
        this.orders = response.data;
      } catch (error) {
        this.error = 'Failed to fetch orders';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async createOrder(orderData: Partial<Order>) {
      try {
        const response = await axios.post('/api/orders', orderData);
        this.orders.unshift(response.data);
        return response.data;
      } catch (error) {
        this.error = 'Failed to create order';
        throw error;
      }
    },

    async updateOrderStatus(orderId: number, status: Order['status']) {
      try {
        const response = await axios.patch(`/api/orders/${orderId}`, { status });
        const index = this.orders.findIndex(order => order.id === orderId);
        if (index !== -1) {
          this.orders[index] = response.data;
        }
      } catch (error) {
        this.error = 'Failed to update order status';
        throw error;
      }
    },
  },
});