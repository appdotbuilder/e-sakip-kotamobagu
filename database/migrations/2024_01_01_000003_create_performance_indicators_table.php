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
        Schema::create('performance_indicators', function (Blueprint $table) {
            $table->id();
            $table->foreignId('government_agency_id')->constrained()->onDelete('cascade');
            $table->string('indicator_code')->unique();
            $table->string('indicator_name');
            $table->text('definition')->nullable();
            $table->string('unit');
            $table->decimal('target', 15, 2);
            $table->decimal('achievement', 15, 2)->default(0);
            $table->year('year');
            $table->enum('frequency', ['monthly', 'quarterly', 'annually'])->default('annually');
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->text('notes')->nullable();
            $table->timestamps();
            
            $table->index('indicator_code');
            $table->index(['government_agency_id', 'year']);
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('performance_indicators');
    }
};