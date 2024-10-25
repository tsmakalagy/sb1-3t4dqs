<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeliveryRate extends Model
{
    protected $fillable = [
        'base_rate',
        'per_km_rate',
        'weight_multiplier',
        'express_multiplier'
    ];

    protected $casts = [
        'base_rate' => 'decimal:2',
        'per_km_rate' => 'decimal:2',
        'weight_multiplier' => 'decimal:2',
        'express_multiplier' => 'decimal:2'
    ];
}