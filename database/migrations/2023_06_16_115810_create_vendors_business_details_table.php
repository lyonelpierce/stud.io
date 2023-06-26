<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vendors_business_details', function (Blueprint $table) {
            $table->id();
            $table->integer('vendor_id');
            $table->string('store_name');
            $table->string('store_description')->nullable();
            $table->string('store_address');
            $table->string('store_city');
            $table->string('store_state');
            $table->string('store_mobile');
            $table->string('store_website')->nullable();
            $table->string('store_ruc');
            $table->string('store_logo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vendors_business_details');
    }
};
