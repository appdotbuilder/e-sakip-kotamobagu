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
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('government_agency_id')->constrained()->onDelete('cascade');
            $table->foreignId('uploaded_by')->constrained('users')->onDelete('cascade');
            $table->string('title');
            $table->text('description')->nullable();
            $table->enum('type', ['planning', 'measurement', 'reporting', 'evaluation']);
            $table->enum('category', ['rpjmd', 'renstra', 'pk', 'lkjip', 'other']);
            $table->string('file_path');
            $table->string('file_name');
            $table->string('file_type');
            $table->integer('file_size');
            $table->enum('status', ['draft', 'pending_review', 'approved', 'rejected', 'revision_needed'])->default('pending_review');
            $table->text('review_notes')->nullable();
            $table->foreignId('reviewed_by')->nullable()->constrained('users')->onDelete('set null');
            $table->timestamp('reviewed_at')->nullable();
            $table->integer('version')->default(1);
            $table->boolean('is_public')->default(false);
            $table->timestamps();
            
            $table->index('type');
            $table->index('category');
            $table->index('status');
            $table->index('is_public');
            $table->index(['government_agency_id', 'type']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('documents');
    }
};