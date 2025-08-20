<?php

namespace App\Http\Controllers;

use App\Models\Document;
use App\Models\Evaluation;
use App\Models\PerformanceIndicator;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display the dashboard.
     */
    public function index()
    {
        $user = Auth::user();
        
        if ($user->isAdmin() || $user->isInspector()) {
            $pendingDocuments = Document::where('status', 'pending_review')
                ->with(['governmentAgency', 'uploader'])
                ->latest()
                ->limit(10)
                ->get();

            $recentEvaluations = Evaluation::with(['governmentAgency'])
                ->latest()
                ->limit(5)
                ->get();

            $stats = [
                'pending_reviews' => Document::where('status', 'pending_review')->count(),
                'approved_documents' => Document::where('status', 'approved')->count(),
                'total_agencies' => \App\Models\GovernmentAgency::active()->count(),
                'total_evaluations' => Evaluation::count(),
            ];

            if ($user->isInspector()) {
                $stats['my_evaluations'] = Evaluation::where('evaluated_by', $user->id)->count();
            }

            return Inertia::render('dashboard', [
                'pendingDocuments' => $pendingDocuments,
                'recentEvaluations' => $recentEvaluations,
                'stats' => $stats,
            ]);
        }
        
        $agencyId = $user->government_agency_id;

        $myDocuments = Document::where('government_agency_id', $agencyId)
            ->latest()
            ->limit(10)
            ->get();

        $performanceIndicators = PerformanceIndicator::where('government_agency_id', $agencyId)
            ->active()
            ->where('year', date('Y'))
            ->get();

        $recentEvaluations = Evaluation::where('government_agency_id', $agencyId)
            ->latest()
            ->limit(3)
            ->get();

        $stats = [
            'my_documents' => Document::where('government_agency_id', $agencyId)->count(),
            'approved_documents' => Document::where('government_agency_id', $agencyId)
                ->where('status', 'approved')->count(),
            'pending_documents' => Document::where('government_agency_id', $agencyId)
                ->where('status', 'pending_review')->count(),
            'performance_indicators' => PerformanceIndicator::where('government_agency_id', $agencyId)
                ->active()
                ->where('year', date('Y'))
                ->count(),
        ];

        $indicatorProgress = $performanceIndicators->map(function ($indicator) {
            return [
                'name' => $indicator->indicator_name,
                'target' => $indicator->target,
                'achievement' => $indicator->achievement,
                'percentage' => $indicator->achievement_percentage,
            ];
        });

        return Inertia::render('dashboard', [
            'myDocuments' => $myDocuments,
            'performanceIndicators' => $performanceIndicators,
            'recentEvaluations' => $recentEvaluations,
            'indicatorProgress' => $indicatorProgress,
            'stats' => $stats,
        ]);
    }
}