<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\GovernmentAgency>
 */
class GovernmentAgencyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $agencies = [
            ['name' => 'Sekretariat Daerah', 'code' => 'SETDA', 'type' => 'organization'],
            ['name' => 'Dinas Pendidikan', 'code' => 'DISDIK', 'type' => 'opd'],
            ['name' => 'Dinas Kesehatan', 'code' => 'DINKES', 'type' => 'opd'],
            ['name' => 'Dinas Pekerjaan Umum dan Penataan Ruang', 'code' => 'DPUPR', 'type' => 'opd'],
            ['name' => 'Dinas Perhubungan', 'code' => 'DISHUB', 'type' => 'opd'],
            ['name' => 'Dinas Sosial', 'code' => 'DINSOS', 'type' => 'opd'],
            ['name' => 'Dinas Tenaga Kerja dan Transmigrasi', 'code' => 'DISNAKERTRANS', 'type' => 'opd'],
            ['name' => 'Dinas Koperasi dan UKM', 'code' => 'DISKOP-UKM', 'type' => 'opd'],
            ['name' => 'Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu', 'code' => 'DPMPTSP', 'type' => 'opd'],
            ['name' => 'Dinas Pemuda dan Olahraga', 'code' => 'DISPORA', 'type' => 'opd'],
            ['name' => 'Dinas Pariwisata', 'code' => 'DISPAR', 'type' => 'opd'],
            ['name' => 'Dinas Perpustakaan dan Kearsipan', 'code' => 'DISPUSIP', 'type' => 'opd'],
            ['name' => 'Inspektorat Daerah', 'code' => 'INSPEKTORAT', 'type' => 'inspectorate'],
            ['name' => 'Badan Perencanaan Pembangunan Daerah', 'code' => 'BAPPEDA', 'type' => 'opd'],
            ['name' => 'Badan Keuangan Daerah', 'code' => 'BKD', 'type' => 'opd'],
        ];

        $agency = $this->faker->randomElement($agencies);

        return [
            'name' => $agency['name'],
            'code' => $agency['code'],
            'type' => $agency['type'],
            'description' => 'Perangkat Daerah ' . $agency['name'] . ' Kota Kotamobagu',
            'head_name' => $this->faker->name(),
            'contact_phone' => $this->faker->phoneNumber(),
            'contact_email' => strtolower($agency['code']) . '@kotamobagu.go.id',
            'address' => 'Jl. ' . $this->faker->streetName() . ', Kotamobagu',
            'status' => 'active',
        ];
    }
}