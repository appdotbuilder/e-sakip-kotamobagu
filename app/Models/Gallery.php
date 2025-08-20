<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\Gallery
 *
 * @property int $id
 * @property string $title
 * @property string|null $description
 * @property string $image_path
 * @property string $image_name
 * @property int|null $government_agency_id
 * @property \Illuminate\Support\Carbon $activity_date
 * @property string|null $location
 * @property bool $is_featured
 * @property bool $is_published
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\GovernmentAgency|null $governmentAgency
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery query()
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery whereActivityDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery whereIsFeatured($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery whereIsPublished($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery published()
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery featured()
 * @method static \Database\Factories\GalleryFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Gallery extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'description',
        'image_path',
        'image_name',
        'government_agency_id',
        'activity_date',
        'location',
        'is_featured',
        'is_published',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'activity_date' => 'date',
        'is_featured' => 'boolean',
        'is_published' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the government agency associated with the gallery item.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function governmentAgency(): BelongsTo
    {
        return $this->belongsTo(GovernmentAgency::class);
    }

    /**
     * Scope a query to only include published gallery items.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePublished($query)
    {
        return $query->where('is_published', true);
    }

    /**
     * Scope a query to only include featured gallery items.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }
}