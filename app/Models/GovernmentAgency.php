<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\GovernmentAgency
 *
 * @property int $id
 * @property string $name
 * @property string $code
 * @property string $type
 * @property string|null $description
 * @property string|null $head_name
 * @property string|null $contact_phone
 * @property string|null $contact_email
 * @property string|null $address
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\User> $users
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Document> $documents
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\PerformanceIndicator> $performanceIndicators
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Evaluation> $evaluations
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentAgency newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentAgency newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentAgency query()
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentAgency whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentAgency whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentAgency whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentAgency whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GovernmentAgency active()
 * @method static \Database\Factories\GovernmentAgencyFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class GovernmentAgency extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'code',
        'type',
        'description',
        'head_name',
        'contact_phone',
        'contact_email',
        'address',
        'status',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the users for the government agency.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }

    /**
     * Get the documents for the government agency.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function documents(): HasMany
    {
        return $this->hasMany(Document::class);
    }

    /**
     * Get the performance indicators for the government agency.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function performanceIndicators(): HasMany
    {
        return $this->hasMany(PerformanceIndicator::class);
    }

    /**
     * Get the evaluations for the government agency.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function evaluations(): HasMany
    {
        return $this->hasMany(Evaluation::class);
    }

    /**
     * Scope a query to only include active agencies.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }
}