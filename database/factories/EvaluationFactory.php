<?php

namespace Database\Factories;

use App\Models\GovernmentAgency;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Evaluation>
 */
class EvaluationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'government_agency_id' => GovernmentAgency::factory(),
            'evaluated_by' => User::factory(),
            'title' => 'Evaluasi SAKIP ' . $this->faker->year() . ' - ' . $this->faker->randomElement([
                'Tahap Perencanaan',
                'Tahap Pengukuran',
                'Tahap Pelaporan',
                'Tahap Evaluasi'
            ]),
            'description' => $this->faker->text(200),
            'stage' => $this->faker->randomElement(['planning', 'measurement', 'reporting', 'evaluation']),
            'score' => $this->faker->randomFloat(2, 60, 100),
            'findings' => $this->faker->text(300),
            'recommendations' => $this->faker->text(200),
            'status' => $this->faker->randomElement(['draft', 'final']),
            'evaluation_date' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'evaluation_year' => $this->faker->year(),
        ];
    }

    /**
     * Indicate that the evaluation is final.
     */
    public function final(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'final',
        ]);
    }
}