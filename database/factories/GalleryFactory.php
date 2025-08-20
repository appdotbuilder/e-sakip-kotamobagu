<?php

namespace Database\Factories;

use App\Models\GovernmentAgency;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Gallery>
 */
class GalleryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $activities = [
            'Workshop SAKIP untuk OPD',
            'Sosialisasi Implementasi E-SAKIP',
            'Bimbingan Teknis Penyusunan LKjIP',
            'Evaluasi Kinerja Tahunan',
            'Rapat Koordinasi SAKIP',
            'Pelatihan Pengukuran Kinerja',
            'Review Dokumen Perencanaan',
            'Monitoring dan Evaluasi Program',
            'Penyusunan Rencana Strategis',
            'Assessment SAKIP Internal',
        ];

        return [
            'title' => $this->faker->randomElement($activities),
            'description' => $this->faker->text(200),
            'image_path' => 'gallery/' . $this->faker->uuid() . '.jpg',
            'image_name' => $this->faker->slug() . '.jpg',
            'government_agency_id' => $this->faker->optional()->randomElement(GovernmentAgency::pluck('id')->toArray()),
            'activity_date' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'location' => $this->faker->randomElement([
                'Balai Kota Kotamobagu',
                'Aula Sekretariat Daerah',
                'Ruang Rapat BAPPEDA',
                'Hotel Cotamobagu',
                'Gedung Serbaguna',
            ]),
            'is_featured' => $this->faker->boolean(20), // 20% chance to be featured
            'is_published' => $this->faker->boolean(90), // 90% chance to be published
        ];
    }

    /**
     * Indicate that the gallery item is featured.
     */
    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_featured' => true,
            'is_published' => true,
        ]);
    }
}