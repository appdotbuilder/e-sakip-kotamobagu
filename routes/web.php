<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\PublicPlanningController;
use App\Http\Controllers\PublicMeasurementController;
use Illuminate\Support\Facades\Route;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Public routes - E-SAKIP Public Access
Route::get('/', [PublicController::class, 'index'])->name('home');
Route::get('/monev/perencanaan', [PublicPlanningController::class, 'index'])->name('public.planning');
Route::get('/monev/pengukuran', [PublicMeasurementController::class, 'index'])->name('public.measurement');
Route::get('/monev/pelaporan', [PublicController::class, 'destroy'])->name('public.reporting');
Route::get('/tentang', [PublicController::class, 'show'])->name('public.about');
Route::get('/kontak', [PublicController::class, 'create'])->name('public.contact');
Route::get('/peraturan', [PublicController::class, 'store'])->name('public.regulations');
Route::get('/gallery', [PublicController::class, 'edit'])->name('public.gallery');
Route::get('/monev/laporan', [PublicController::class, 'update'])->name('public.reports');

// Authenticated routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
