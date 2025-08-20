<?php

namespace Database\Factories;

use App\Models\GovernmentAgency;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Document>
 */
class DocumentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $types = ['planning', 'measurement', 'reporting', 'evaluation'];
        $categories = ['rpjmd', 'renstra', 'pk', 'lkjip', 'other'];
        $statuses = ['approved', 'pending_review', 'rejected', 'revision_needed'];
        
        $type = $this->faker->randomElement($types);
        $category = $this->faker->randomElement($categories);
        
        $titles = [
            'planning' => [
                'Rencana Strategis 2024-2029',
                'RPJMD Kota Kotamobagu 2024-2029',
                'Perjanjian Kinerja Tahun 2024',
                'Dokumen Perencanaan Kinerja',
            ],
            'measurement' => [
                'Laporan Pengukuran Kinerja Q1 2024',
                'Data Capaian IKU Triwulan II',
                'Realisasi Target Kinerja',
                'Monitoring Indikator Kinerja',
            ],
            'reporting' => [
                'LKjIP Tahun 2023',
                'Laporan Kinerja Instansi Pemerintah',
                'Laporan Capaian Kinerja Tahunan',
                'Dokumen Pelaporan SAKIP',
            ],
            'evaluation' => [
                'Hasil Evaluasi SAKIP 2023',
                'Laporan Evaluasi Kinerja',
                'Assessment SAKIP Internal',
                'Review Implementasi SAKIP',
            ]
        ];

        return [
            'government_agency_id' => GovernmentAgency::factory(),
            'uploaded_by' => User::factory(),
            'title' => $this->faker->randomElement($titles[$type]),
            'description' => $this->faker->text(200),
            'type' => $type,
            'category' => $category,
            'file_path' => 'documents/' . $this->faker->uuid() . '.pdf',
            'file_name' => $this->faker->slug() . '.pdf',
            'file_type' => 'application/pdf',
            'file_size' => $this->faker->numberBetween(100000, 5000000),
            'status' => $this->faker->randomElement($statuses),
            'review_notes' => $this->faker->optional()->text(150),
            'reviewed_by' => $this->faker->optional()->randomElement(User::pluck('id')->toArray()),
            'reviewed_at' => $this->faker->optional()->dateTimeBetween('-30 days', 'now'),
            'version' => $this->faker->numberBetween(1, 3),
            'is_public' => $this->faker->boolean(70), // 70% chance to be public
        ];
    }

    /**
     * Indicate that the document is approved and public.
     */
    public function approved(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'approved',
            'is_public' => true,
            'reviewed_at' => $this->faker->dateTimeBetween('-30 days', 'now'),
        ]);
    }

    /**
     * Indicate that the document is pending review.
     */
    public function pending(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'pending_review',
            'reviewed_by' => null,
            'reviewed_at' => null,
            'review_notes' => null,
        ]);
    }
}