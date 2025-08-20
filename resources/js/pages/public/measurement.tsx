import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';

interface Indicator {
    id: number;
    indicator_name: string;
    indicator_code: string;
    target: number;
    achievement: number;
    achievement_percentage: number;
    unit: string;
    government_agency?: {
        name: string;
    };
}

interface Agency {
    id: number;
    name: string;
}

interface PaginatedIndicators {
    data: Indicator[];
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
    current_page: number;
    last_page: number;
}

interface Props {
    indicators: PaginatedIndicators;
    agencies: Agency[];
    years: number[];
    filters: {
        agency?: string;
        year?: string;
    };
    [key: string]: unknown;
}

export default function Measurement({ indicators, agencies, years, filters }: Props) {
    const [selectedAgency, setSelectedAgency] = useState(filters.agency || '');
    const [selectedYear, setSelectedYear] = useState(filters.year || '');

    const handleFilter = () => {
        router.get('/monev/pengukuran', {
            agency: selectedAgency,
            year: selectedYear,
        }, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const getPerformanceColor = (percentage: number) => {
        if (percentage >= 90) return 'text-green-600 bg-green-100';
        if (percentage >= 70) return 'text-yellow-600 bg-yellow-100';
        return 'text-red-600 bg-red-100';
    };

    return (
        <>
            <Head title="Pengukuran - E-SAKIP Kotamobagu" />
            
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <header className="bg-white shadow-sm border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                                    <span className="text-2xl">🏛️</span>
                                    <span className="font-bold">E-SAKIP</span>
                                </Link>
                                <span className="text-gray-400">/</span>
                                <span className="text-gray-900 font-semibold">Pengukuran</span>
                            </div>
                            <Link
                                href="/"
                                className="text-gray-600 hover:text-gray-900 font-medium"
                            >
                                ← Kembali ke Beranda
                            </Link>
                        </div>
                    </div>
                </header>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Page Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            📊 Pengukuran Kinerja
                        </h1>
                        <p className="text-lg text-gray-600">
                            Tabulasi pencapaian Indikator Kinerja Utama (IKU) dari berbagai 
                            Perangkat Daerah di Kota Kotamobagu
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">🔍 Filter Data</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label htmlFor="agency" className="block text-sm font-medium text-gray-700 mb-2">
                                    Perangkat Daerah
                                </label>
                                <select
                                    id="agency"
                                    value={selectedAgency}
                                    onChange={(e) => setSelectedAgency(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Semua Perangkat Daerah</option>
                                    {agencies.map((agency) => (
                                        <option key={agency.id} value={agency.id}>
                                            {agency.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                                    Tahun
                                </label>
                                <select
                                    id="year"
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Semua Tahun</option>
                                    {years.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-end">
                                <button
                                    onClick={handleFilter}
                                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
                                >
                                    Terapkan Filter
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Performance Indicators */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="px-6 py-4 border-b bg-gray-50">
                            <h3 className="text-lg font-semibold text-gray-900">
                                📈 Indikator Kinerja Utama ({indicators.data.length} indikator)
                            </h3>
                        </div>
                        
                        {indicators.data.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Indikator
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Perangkat Daerah
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Target
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Realisasi
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Capaian
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {indicators.data.map((indicator) => (
                                            <tr key={indicator.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4">
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {indicator.indicator_name}
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            {indicator.indicator_code}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-900">
                                                    {indicator.government_agency?.name}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-900">
                                                    {indicator.target} {indicator.unit}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-900">
                                                    {indicator.achievement} {indicator.unit}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center">
                                                        <div className="flex-1">
                                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                                <div
                                                                    className={`h-2 rounded-full ${
                                                                        indicator.achievement_percentage >= 90
                                                                            ? 'bg-green-500'
                                                                            : indicator.achievement_percentage >= 70
                                                                            ? 'bg-yellow-500'
                                                                            : 'bg-red-500'
                                                                    }`}
                                                                    style={{
                                                                        width: `${Math.min(indicator.achievement_percentage, 100)}%`
                                                                    }}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                        <span className="ml-2 text-sm font-medium text-gray-900">
                                                            {indicator.achievement_percentage}%
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPerformanceColor(indicator.achievement_percentage)}`}>
                                                        {indicator.achievement_percentage >= 90
                                                            ? '🎯 Sangat Baik'
                                                            : indicator.achievement_percentage >= 70
                                                            ? '⚠️ Baik'
                                                            : '❌ Perlu Perbaikan'}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="p-12 text-center text-gray-500">
                                <div className="text-6xl mb-4">📊</div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">
                                    Tidak ada data indikator kinerja
                                </h3>
                                <p>Coba ubah filter pencarian Anda</p>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {indicators.last_page > 1 && (
                        <div className="mt-8 flex justify-center">
                            <nav className="flex items-center space-x-2">
                                {indicators.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url || '#'}
                                        className={`px-3 py-2 text-sm font-medium rounded-md ${
                                            link.active
                                                ? 'bg-blue-600 text-white'
                                                : 'text-gray-700 hover:bg-gray-100'
                                        } ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ))}
                            </nav>
                        </div>
                    )}

                    {/* Performance Summary */}
                    {indicators.data.length > 0 && (
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <div className="flex items-center">
                                    <div className="text-3xl mr-3">🎯</div>
                                    <div>
                                        <p className="text-sm font-medium text-green-800">Sangat Baik (≥90%)</p>
                                        <p className="text-2xl font-bold text-green-900">
                                            {indicators.data.filter(i => i.achievement_percentage >= 90).length}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                <div className="flex items-center">
                                    <div className="text-3xl mr-3">⚠️</div>
                                    <div>
                                        <p className="text-sm font-medium text-yellow-800">Baik (70-89%)</p>
                                        <p className="text-2xl font-bold text-yellow-900">
                                            {indicators.data.filter(i => i.achievement_percentage >= 70 && i.achievement_percentage < 90).length}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                <div className="flex items-center">
                                    <div className="text-3xl mr-3">❌</div>
                                    <div>
                                        <p className="text-sm font-medium text-red-800">Perlu Perbaikan (&lt;70%)</p>
                                        <p className="text-2xl font-bold text-red-900">
                                            {indicators.data.filter(i => i.achievement_percentage < 70).length}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}