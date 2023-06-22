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
        Schema::create('vendors', function (Blueprint $table) {
            $table->id();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('description')->nullable();
            $table->string('type');
            $table->string('image');
            $table->string('state');
            $table->string('city');
            $table->string('address');
            $table->string('mobile');
            $table->string('document');
            $table->string('email')->unique();
            $table->string('password');
            $table->tinyInteger('studio_id');
            $table->tinyInteger('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vendors');
    }
};
