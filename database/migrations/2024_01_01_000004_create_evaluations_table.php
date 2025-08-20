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
        Schema::create('evaluations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('government_agency_id')->constrained()->onDelete('cascade');
            $table->foreignId('evaluated_by')->constrained('users')->onDelete('cascade');
            $table->string('title');
            $table->text('description');
            $table->enum('stage', ['planning', 'measurement', 'reporting', 'evaluation']);
            $table->decimal('score', 5, 2)->nullable();
            $table->text('findings')->nullable();
            $table->text('recommendations')->nullable();
            $table->enum('status', ['draft', 'final'])->default('draft');
            $table->date('evaluation_date');
            $table->year('evaluation_year');
            $table->timestamps();
            
            $table->index(['government_agency_id', 'evaluation_year']);
            $table->index('stage');
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('evaluations');
    }
};