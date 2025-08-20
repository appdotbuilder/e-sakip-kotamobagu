<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $role
 * @property int|null $government_agency_id
 * @property string|null $position
 * @property string|null $phone
 * @property bool $is_active
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\GovernmentAgency|null $governmentAgency
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Document> $uploadedDocuments
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Document> $reviewedDocuments
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Evaluation> $evaluations
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereGovernmentAgencyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'role',
        'government_agency_id',
        'position',
        'phone',
        'is_active',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'is_active' => 'boolean',
        ];
    }

    /**
     * Get the government agency that owns the user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function governmentAgency(): BelongsTo
    {
        return $this->belongsTo(GovernmentAgency::class);
    }

    /**
     * Get the documents uploaded by the user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function uploadedDocuments(): HasMany
    {
        return $this->hasMany(Document::class, 'uploaded_by');
    }

    /**
     * Get the documents reviewed by the user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function reviewedDocuments(): HasMany
    {
        return $this->hasMany(Document::class, 'reviewed_by');
    }

    /**
     * Get the evaluations conducted by the user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function evaluations(): HasMany
    {
        return $this->hasMany(Evaluation::class, 'evaluated_by');
    }

    /**
     * Check if user is an admin.
     *
     * @return bool
     */
    public function isAdmin(): bool
    {
        return $this->role === 'admin';
    }

    /**
     * Check if user is an inspector.
     *
     * @return bool
     */
    public function isInspector(): bool
    {
        return $this->role === 'inspector';
    }

    /**
     * Check if user is an OPD user.
     *
     * @return bool
     */
    public function isOpdUser(): bool
    {
        return $this->role === 'opd_user';
    }
}