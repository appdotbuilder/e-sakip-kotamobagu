<?php

namespace App\Http\Controllers;

use App\Models\Document;
use App\Models\Gallery;
use App\Models\GovernmentAgency;
use App\Models\PerformanceIndicator;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicController extends Controller
{
    /**
     * Display the public home page.
     */
    public function index()
    {
        $featuredGallery = Gallery::published()
            ->featured()
            ->latest('activity_date')
            ->limit(6)
            ->get();

        $recentDocuments = Document::publicDocuments()
            ->approved()
            ->with('governmentAgency')
            ->latest()
            ->limit(5)
            ->get();

        $stats = [
            'total_agencies' => GovernmentAgency::active()->count(),
            'total_documents' => Document::publicDocuments()->approved()->count(),
            'total_indicators' => PerformanceIndicator::active()->count(),
            'total_evaluations' => \App\Models\Evaluation::final()->count(),
        ];

        return Inertia::render('welcome', [
            'featuredGallery' => $featuredGallery,
            'recentDocuments' => $recentDocuments,
            'stats' => $stats,
        ]);
    }

    /**
     * Show about page.
     */
    public function show()
    {
        return Inertia::render('public/about');
    }

    /**
     * Show contact page.
     */
    public function create()
    {
        return Inertia::render('public/contact');
    }

    /**
     * Show regulations page.
     */
    public function store()
    {
        return Inertia::render('public/regulations');
    }

    /**
     * Show gallery.
     */
    public function edit(Request $request)
    {
        $query = Gallery::published()
            ->with('governmentAgency');

        if ($request->filled('agency')) {
            $query->where('government_agency_id', $request->agency);
        }

        $galleries = $query->latest('activity_date')->paginate(12);
        $agencies = GovernmentAgency::active()->orderBy('name')->get();

        return Inertia::render('public/gallery', [
            'galleries' => $galleries,
            'agencies' => $agencies,
            'filters' => $request->only(['agency']),
        ]);
    }

    /**
     * Show reports page.
     */
    public function update()
    {
        return Inertia::render('public/reports');
    }

    /**
     * Show reporting documents.
     */
    public function destroy(Request $request)
    {
        $query = Document::publicDocuments()
            ->approved()
            ->where('type', 'reporting')
            ->with(['governmentAgency']);

        if ($request->filled('agency')) {
            $query->where('government_agency_id', $request->agency);
        }

        $documents = $query->latest()->paginate(10);
        $agencies = GovernmentAgency::active()->orderBy('name')->get();

        return Inertia::render('public/reporting', [
            'documents' => $documents,
            'agencies' => $agencies,
            'filters' => $request->only(['agency']),
        ]);
    }
}