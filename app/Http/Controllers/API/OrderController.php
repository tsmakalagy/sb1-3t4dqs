<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\DeliveryRate;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class OrderController extends Controller
{
    public function index(): JsonResponse
    {
        $orders = Order::with('user')->latest()->get();
        return response()->json($orders);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'pickup_address' => 'required|string',
            'delivery_address' => 'required|string',
            'package_type' => 'required|string',
            'weight' => 'required|numeric|min:0',
            'special_instructions' => 'nullable|string',
            'is_express' => 'boolean'
        ]);

        // Calculate distance (in a real app, use a mapping API)
        $distance = 15.0; // Simulated distance

        // Calculate total cost
        $rate = DeliveryRate::latest()->first();
        $totalCost = $this->calculateDeliveryCost(
            $distance,
            $validated['weight'],
            $validated['is_express'] ?? false,
            $rate
        );

        $order = Order::create([
            ...$validated,
            'user_id' => auth()->id(),
            'distance' => $distance,
            'total_cost' => $totalCost
        ]);

        return response()->json($order, 201);
    }

    public function update(Request $request, Order $order): JsonResponse
    {
        $validated = $request->validate([
            'status' => 'required|in:pending,in_progress,completed,cancelled'
        ]);

        $order->update($validated);
        return response()->json($order);
    }

    private function calculateDeliveryCost(
        float $distance,
        float $weight,
        bool $isExpress,
        DeliveryRate $rate
    ): float {
        $cost = $rate->base_rate;
        $cost += $distance * $rate->per_km_rate;
        $cost *= 1 + ($weight * $rate->weight_multiplier / 100);
        
        if ($isExpress) {
            $cost *= $rate->express_multiplier;
        }

        return round($cost, 2);
    }
}