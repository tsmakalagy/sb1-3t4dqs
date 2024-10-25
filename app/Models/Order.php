<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Order extends Model
{
    protected $fillable = [
        'user_id',
        'pickup_address',
        'delivery_address',
        'package_type',
        'weight',
        'special_instructions',
        'is_express',
        'distance',
        'total_cost',
        'status'
    ];

    protected $casts = [
        'weight' => 'decimal:2',
        'distance' => 'decimal:2',
        'total_cost' => 'decimal:2',
        'is_express' => 'boolean'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}