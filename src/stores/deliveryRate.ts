import { defineStore } from 'pinia';
import axios from 'axios';

interface DeliveryRate {
  id: number;
  base_rate: number;
  per_km_rate: number;
  weight_multiplier: number;
  express_multiplier: number;
}

export const useDeliveryRateStore = defineStore('deliveryRate', {
  state: () => ({
    currentRate: null as DeliveryRate | null,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchCurrentRate() {
      this.loading = true;
      try {
        const response = await axios.get('/api/delivery-rates');
        this.currentRate = response.data;
      } catch (error) {
        this.error = 'Failed to fetch delivery rates';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async updateRate(rateData: Partial<DeliveryRate>) {
      try {
        const response = await axios.post('/api/delivery-rates', rateData);
        this.currentRate = response.data;
        return response.data;
      } catch (error) {
        this.error = 'Failed to update delivery rates';
        throw error;
      }
    },
  },
});