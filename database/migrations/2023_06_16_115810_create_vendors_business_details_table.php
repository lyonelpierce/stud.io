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
            $table->string('studio_name');
            $table->string('studio_description')->nullable();
            $table->string('studio_address');
            $table->string('studio_city');
            $table->string('studio_state');
            $table->string('studio_mobile');
            $table->string('studio_website')->nullable();
            $table->string('studio_ruc')->nullable();
            $table->string('studio_logo');
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
