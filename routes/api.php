<?php

use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\OrderController;
use App\Http\Controllers\API\DeliveryRateController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    // Products
    Route::apiResource('products', ProductController::class);
    
    // Orders
    Route::apiResource('orders', OrderController::class);
    
    // Delivery Rates
    Route::get('delivery-rates', [DeliveryRateController::class, 'index']);
    Route::post('delivery-rates', [DeliveryRateController::class, 'store']);
});