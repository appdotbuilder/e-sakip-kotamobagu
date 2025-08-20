<?php

namespace App\Http\Controllers;

use App\Models\Document;
use App\Models\GovernmentAgency;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicPlanningController extends Controller
{
    /**
     * Display planning documents.
     */
    public function index(Request $request)
    {
        $query = Document::publicDocuments()
            ->approved()
            ->where('type', 'planning')
            ->with(['governmentAgency']);

        if ($request->filled('agency')) {
            $query->where('government_agency_id', $request->agency);
        }

        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }

        $documents = $query->latest()->paginate(10);
        $agencies = GovernmentAgency::active()->orderBy('name')->get();

        return Inertia::render('public/planning', [
            'documents' => $documents,
            'agencies' => $agencies,
            'filters' => $request->only(['agency', 'category']),
        ]);
    }
}