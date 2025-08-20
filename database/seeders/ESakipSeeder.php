<?php

namespace Database\Seeders;

use App\Models\Document;
use App\Models\Evaluation;
use App\Models\Gallery;
use App\Models\GovernmentAgency;
use App\Models\PerformanceIndicator;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class ESakipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create Government Agencies
        $agencies = [
            ['name' => 'Sekretariat Daerah', 'code' => 'SETDA', 'type' => 'organization'],
            ['name' => 'Inspektorat Daerah', 'code' => 'INSPEKTORAT', 'type' => 'inspectorate'],
            ['name' => 'Dinas Pendidikan', 'code' => 'DISDIK', 'type' => 'opd'],
            ['name' => 'Dinas Kesehatan', 'code' => 'DINKES', 'type' => 'opd'],
            ['name' => 'Dinas Pekerjaan Umum dan Penataan Ruang', 'code' => 'DPUPR', 'type' => 'opd'],
            ['name' => 'Dinas Perhubungan', 'code' => 'DISHUB', 'type' => 'opd'],
            ['name' => 'Dinas Sosial', 'code' => 'DINSOS', 'type' => 'opd'],
            ['name' => 'Dinas Pariwisata', 'code' => 'DISPAR', 'type' => 'opd'],
            ['name' => 'Badan Perencanaan Pembangunan Daerah', 'code' => 'BAPPEDA', 'type' => 'opd'],
            ['name' => 'Badan Keuangan Daerah', 'code' => 'BKD', 'type' => 'opd'],
        ];

        foreach ($agencies as $agencyData) {
            GovernmentAgency::create([
                'name' => $agencyData['name'],
                'code' => $agencyData['code'],
                'type' => $agencyData['type'],
                'description' => 'Perangkat Daerah ' . $agencyData['name'] . ' Kota Kotamobagu',
                'head_name' => fake()->name(),
                'contact_phone' => fake()->phoneNumber(),
                'contact_email' => strtolower($agencyData['code']) . '@kotamobagu.go.id',
                'address' => 'Jl. ' . fake()->streetName() . ', Kotamobagu',
                'status' => 'active',
            ]);
        }

        // Create Admin User
        $adminUser = User::create([
            'name' => 'Administrator SAKIP',
            'email' => 'admin@kotamobagu.go.id',
            'password' => Hash::make('password'),
            'role' => 'admin',
            'government_agency_id' => GovernmentAgency::where('type', 'organization')->first()->id,
            'position' => 'Administrator Sistem',
            'phone' => '081234567890',
            'is_active' => true,
            'email_verified_at' => now(),
        ]);

        // Create Inspector User
        $inspectorUser = User::create([
            'name' => 'Inspektur SAKIP',
            'email' => 'inspector@kotamobagu.go.id',
            'password' => Hash::make('password'),
            'role' => 'inspector',
            'government_agency_id' => GovernmentAgency::where('type', 'inspectorate')->first()->id,
            'position' => 'Inspektur Daerah',
            'phone' => '081234567891',
            'is_active' => true,
            'email_verified_at' => now(),
        ]);

        // Create OPD Users
        $opdAgencies = GovernmentAgency::where('type', 'opd')->get();
        foreach ($opdAgencies->take(5) as $agency) {
            User::create([
                'name' => 'Kasubag Perencanaan ' . $agency->name,
                'email' => strtolower($agency->code) . '@kotamobagu.go.id',
                'password' => Hash::make('password'),
                'role' => 'opd_user',
                'government_agency_id' => $agency->id,
                'position' => 'Kasubag Perencanaan',
                'phone' => fake()->phoneNumber(),
                'is_active' => true,
                'email_verified_at' => now(),
            ]);
        }

        // Create Performance Indicators
        foreach ($opdAgencies as $agency) {
            PerformanceIndicator::factory(random_int(2, 5))
                ->for($agency)
                ->create([
                    'year' => 2024,
                ]);
        }

        // Create Documents
        $users = User::where('role', 'opd_user')->get();
        foreach ($users as $user) {
            // Planning documents
            Document::factory(random_int(2, 4))
                ->approved()
                ->create([
                    'government_agency_id' => $user->government_agency_id,
                    'uploaded_by' => $user->id,
                    'type' => 'planning',
                    'category' => fake()->randomElement(['rpjmd', 'renstra', 'pk']),
                ]);

            // Reporting documents
            Document::factory(random_int(1, 3))
                ->approved()
                ->create([
                    'government_agency_id' => $user->government_agency_id,
                    'uploaded_by' => $user->id,
                    'type' => 'reporting',
                    'category' => fake()->randomElement(['lkjip', 'other']),
                ]);

            // Pending documents
            Document::factory(random_int(1, 2))
                ->pending()
                ->create([
                    'government_agency_id' => $user->government_agency_id,
                    'uploaded_by' => $user->id,
                    'type' => fake()->randomElement(['planning', 'reporting']),
                ]);
        }

        // Create Evaluations
        foreach ($opdAgencies->take(6) as $agency) {
            Evaluation::create([
                'government_agency_id' => $agency->id,
                'evaluated_by' => $inspectorUser->id,
                'title' => 'Evaluasi SAKIP ' . $agency->name . ' Tahun 2023',
                'description' => 'Evaluasi implementasi SAKIP pada ' . $agency->name,
                'stage' => fake()->randomElement(['planning', 'measurement', 'reporting', 'evaluation']),
                'score' => fake()->randomFloat(2, 60, 95),
                'findings' => fake()->text(300),
                'recommendations' => fake()->text(200),
                'status' => 'final',
                'evaluation_date' => fake()->dateTimeBetween('-6 months', 'now'),
                'evaluation_year' => 2023,
            ]);
        }

        // Create Gallery Items
        Gallery::factory(20)->create();
        Gallery::factory(5)->featured()->create();
    }
}