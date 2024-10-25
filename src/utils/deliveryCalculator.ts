interface DeliveryParams {
  distance: number;
  weight: number;
  isExpress: boolean;
  baseRate: number;
  perKmRate: number;
  weightMultiplier: number;
  expressMultiplier: number;
}

export const calculateDeliveryCost = ({
  distance,
  weight,
  isExpress,
  baseRate,
  perKmRate,
  weightMultiplier,
  expressMultiplier
}: DeliveryParams): number => {
  // Base cost calculation
  let cost = baseRate;
  
  // Add distance cost
  cost += distance * perKmRate;
  
  // Add weight factor
  cost *= 1 + (weight * weightMultiplier / 100);
  
  // Add express delivery surcharge if applicable
  if (isExpress) {
    cost *= expressMultiplier;
  }
  
  return Number(cost.toFixed(2));
};