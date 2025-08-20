<?php

namespace App\Http\Controllers;

use App\Models\GovernmentAgency;
use App\Models\PerformanceIndicator;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicMeasurementController extends Controller
{
    /**
     * Display performance measurements.
     */
    public function index(Request $request)
    {
        $query = PerformanceIndicator::active()
            ->with('governmentAgency');

        if ($request->filled('agency')) {
            $query->where('government_agency_id', $request->agency);
        }

        if ($request->filled('year')) {
            $query->where('year', $request->year);
        }

        $indicators = $query->orderBy('indicator_name')->paginate(15);
        $agencies = GovernmentAgency::active()->orderBy('name')->get();
        $years = PerformanceIndicator::distinct()->orderByDesc('year')->pluck('year');

        return Inertia::render('public/measurement', [
            'indicators' => $indicators,
            'agencies' => $agencies,
            'years' => $years,
            'filters' => $request->only(['agency', 'year']),
        ]);
    }
}