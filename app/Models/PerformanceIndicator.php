<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\PerformanceIndicator
 *
 * @property int $id
 * @property int $government_agency_id
 * @property string $indicator_code
 * @property string $indicator_name
 * @property string|null $definition
 * @property string $unit
 * @property float $target
 * @property float $achievement
 * @property int $year
 * @property string $frequency
 * @property string $status
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\GovernmentAgency $governmentAgency
 * @property-read float $achievement_percentage
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|PerformanceIndicator newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PerformanceIndicator newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PerformanceIndicator query()
 * @method static \Illuminate\Database\Eloquent\Builder|PerformanceIndicator whereIndicatorCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PerformanceIndicator whereYear($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PerformanceIndicator whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PerformanceIndicator active()
 * @method static \Database\Factories\PerformanceIndicatorFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class PerformanceIndicator extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'government_agency_id',
        'indicator_code',
        'indicator_name',
        'definition',
        'unit',
        'target',
        'achievement',
        'year',
        'frequency',
        'status',
        'notes',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'target' => 'decimal:2',
        'achievement' => 'decimal:2',
        'year' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the government agency that owns the performance indicator.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function governmentAgency(): BelongsTo
    {
        return $this->belongsTo(GovernmentAgency::class);
    }

    /**
     * Get the achievement percentage.
     *
     * @return float
     */
    public function getAchievementPercentageAttribute(): float
    {
        if ($this->target === 0.0) {
            return 0;
        }
        
        return round(($this->achievement / $this->target) * 100, 2);
    }

    /**
     * Scope a query to only include active indicators.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }
}