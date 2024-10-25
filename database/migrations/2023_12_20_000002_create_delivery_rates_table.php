<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('delivery_rates', function (Blueprint $table) {
            $table->id();
            $table->decimal('base_rate', 10, 2);
            $table->decimal('per_km_rate', 10, 2);
            $table->decimal('weight_multiplier', 10, 2);
            $table->decimal('express_multiplier', 10, 2);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('delivery_rates');
    }
};