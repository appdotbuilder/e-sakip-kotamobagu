<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\Evaluation
 *
 * @property int $id
 * @property int $government_agency_id
 * @property int $evaluated_by
 * @property string $title
 * @property string $description
 * @property string $stage
 * @property float|null $score
 * @property string|null $findings
 * @property string|null $recommendations
 * @property string $status
 * @property \Illuminate\Support\Carbon $evaluation_date
 * @property int $evaluation_year
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\GovernmentAgency $governmentAgency
 * @property-read \App\Models\User $evaluator
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Evaluation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Evaluation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Evaluation query()
 * @method static \Illuminate\Database\Eloquent\Builder|Evaluation whereStage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Evaluation whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Evaluation whereEvaluationYear($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Evaluation final()
 * @method static \Database\Factories\EvaluationFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Evaluation extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'government_agency_id',
        'evaluated_by',
        'title',
        'description',
        'stage',
        'score',
        'findings',
        'recommendations',
        'status',
        'evaluation_date',
        'evaluation_year',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'evaluation_date' => 'date',
        'evaluation_year' => 'integer',
        'score' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the government agency that is being evaluated.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function governmentAgency(): BelongsTo
    {
        return $this->belongsTo(GovernmentAgency::class);
    }

    /**
     * Get the user who conducted the evaluation.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function evaluator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'evaluated_by');
    }

    /**
     * Scope a query to only include final evaluations.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFinal($query)
    {
        return $query->where('status', 'final');
    }
}