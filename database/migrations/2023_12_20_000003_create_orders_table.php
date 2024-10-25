<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->string('pickup_address');
            $table->string('delivery_address');
            $table->string('package_type');
            $table->decimal('weight', 10, 2);
            $table->text('special_instructions')->nullable();
            $table->boolean('is_express')->default(false);
            $table->decimal('distance', 10, 2);
            $table->decimal('total_cost', 10, 2);
            $table->enum('status', ['pending', 'in_progress', 'completed', 'cancelled'])->default('pending');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};