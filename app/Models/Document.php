<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\Document
 *
 * @property int $id
 * @property int $government_agency_id
 * @property int $uploaded_by
 * @property string $title
 * @property string|null $description
 * @property string $type
 * @property string $category
 * @property string $file_path
 * @property string $file_name
 * @property string $file_type
 * @property int $file_size
 * @property string $status
 * @property string|null $review_notes
 * @property int|null $reviewed_by
 * @property \Illuminate\Support\Carbon|null $reviewed_at
 * @property int $version
 * @property bool $is_public
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\GovernmentAgency $governmentAgency
 * @property-read \App\Models\User $uploader
 * @property-read \App\Models\User|null $reviewer
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Document newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Document newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Document query()
 * @method static \Illuminate\Database\Eloquent\Builder|Document whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Document whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Document whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Document whereIsPublic($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Document publicDocuments()
 * @method static \Illuminate\Database\Eloquent\Builder|Document approved()
 * @method static \Database\Factories\DocumentFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Document extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'government_agency_id',
        'uploaded_by',
        'title',
        'description',
        'type',
        'category',
        'file_path',
        'file_name',
        'file_type',
        'file_size',
        'status',
        'review_notes',
        'reviewed_by',
        'reviewed_at',
        'version',
        'is_public',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'reviewed_at' => 'datetime',
        'is_public' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the government agency that owns the document.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function governmentAgency(): BelongsTo
    {
        return $this->belongsTo(GovernmentAgency::class);
    }

    /**
     * Get the user who uploaded the document.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function uploader(): BelongsTo
    {
        return $this->belongsTo(User::class, 'uploaded_by');
    }

    /**
     * Get the user who reviewed the document.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function reviewer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'reviewed_by');
    }

    /**
     * Scope a query to only include public documents.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePublicDocuments($query)
    {
        return $query->where('is_public', true);
    }

    /**
     * Scope a query to only include approved documents.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeApproved($query)
    {
        return $query->where('status', 'approved');
    }
}