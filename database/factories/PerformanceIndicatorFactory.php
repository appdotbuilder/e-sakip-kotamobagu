<?php

namespace Database\Factories;

use App\Models\GovernmentAgency;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PerformanceIndicator>
 */
class PerformanceIndicatorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $indicators = [
            [
                'name' => 'Persentase Angka Partisipasi Sekolah',
                'unit' => 'persen',
                'target_range' => [85, 100],
            ],
            [
                'name' => 'Jumlah Fasilitas Kesehatan yang Beroperasi',
                'unit' => 'unit',
                'target_range' => [50, 200],
            ],
            [
                'name' => 'Panjang Jalan dalam Kondisi Baik',
                'unit' => 'km',
                'target_range' => [100, 500],
            ],
            [
                'name' => 'Jumlah Kegiatan Pemberdayaan Masyarakat',
                'unit' => 'kegiatan',
                'target_range' => [20, 100],
            ],
            [
                'name' => 'Persentase Pelayanan Publik yang Memuaskan',
                'unit' => 'persen',
                'target_range' => [80, 100],
            ],
            [
                'name' => 'Jumlah Kunjungan Wisatawan',
                'unit' => 'orang',
                'target_range' => [10000, 100000],
            ],
            [
                'name' => 'Tingkat Kepuasan Masyarakat',
                'unit' => 'indeks',
                'target_range' => [3.5, 5.0],
            ],
        ];

        $indicator = $this->faker->randomElement($indicators);
        $target = $this->faker->numberBetween($indicator['target_range'][0], $indicator['target_range'][1]);
        $achievement = $this->faker->numberBetween(
            intval($target * 0.6), 
            intval($target * 1.2)
        );

        return [
            'government_agency_id' => GovernmentAgency::factory(),
            'indicator_code' => 'IKU-' . strtoupper($this->faker->bothify('??-###')),
            'indicator_name' => $indicator['name'],
            'definition' => 'Definisi: ' . $indicator['name'] . ' adalah ukuran kinerja yang menunjukkan...',
            'unit' => $indicator['unit'],
            'target' => $target,
            'achievement' => $achievement,
            'year' => $this->faker->randomElement([2023, 2024]),
            'frequency' => $this->faker->randomElement(['monthly', 'quarterly', 'annually']),
            'status' => 'active',
            'notes' => $this->faker->optional()->text(100),
        ];
    }

    /**
     * Indicate that the indicator has high achievement.
     */
    public function highAchievement(): static
    {
        return $this->state(function (array $attributes) {
            $target = $attributes['target'];
            $achievement = $this->faker->numberBetween(
                intval($target * 0.9), 
                intval($target * 1.1)
            );

            return [
                'achievement' => $achievement,
            ];
        });
    }

    /**
     * Indicate that the indicator has low achievement.
     */
    public function lowAchievement(): static
    {
        return $this->state(function (array $attributes) {
            $target = $attributes['target'];
            $achievement = $this->faker->numberBetween(
                intval($target * 0.3), 
                intval($target * 0.7)
            );

            return [
                'achievement' => $achievement,
            ];
        });
    }
}