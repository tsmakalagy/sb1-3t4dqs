<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\DeliveryRate;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class DeliveryRateController extends Controller
{
    public function index(): JsonResponse
    {
        $rate = DeliveryRate::latest()->first();
        return response()->json($rate);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'base_rate' => 'required|numeric|min:0',
            'per_km_rate' => 'required|numeric|min:0',
            'weight_multiplier' => 'required|numeric|min:0',
            'express_multiplier' => 'required|numeric|min:1'
        ]);

        $rate = DeliveryRate::create($validated);
        return response()->json($rate, 201);
    }
}