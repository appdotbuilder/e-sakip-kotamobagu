import { Head, Link } from '@inertiajs/react';

export default function Regulations() {
    return (
        <>
            <Head title="Peraturan - E-SAKIP Kotamobagu" />
            
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
                                <span className="text-gray-900 font-semibold">Peraturan</span>
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
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            ⚖️ Dasar Hukum SAKIP
                        </h1>
                        <p className="text-xl text-gray-600">
                            Peraturan dan regulasi yang menjadi landasan SAKIP
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">📜 Peraturan Pusat</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>• PP No. 39 Tahun 2006 tentang Tata Cara Pengendalian dan Evaluasi Pelaksanaan Rencana Pembangunan</li>
                                <li>• Perpres No. 29 Tahun 2014 tentang Sistem Akuntabilitas Kinerja Instansi Pemerintah</li>
                                <li>• PermenPAN-RB No. 53 Tahun 2014 tentang Petunjuk Teknis Perjanjian Kinerja</li>
                                <li>• PermenPAN-RB No. 12 Tahun 2015 tentang Pedoman Evaluasi atas Implementasi SAKIP</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">🏛️ Peraturan Daerah</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>• Perda Kota Kotamobagu tentang RPJMD 2021-2026</li>
                                <li>• Perwali tentang Implementasi SAKIP di Lingkungan Pemkot Kotamobagu</li>
                                <li>• SK Walikota tentang Tim Koordinasi SAKIP</li>
                                <li>• Juklak SAKIP Kota Kotamobagu</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">
                                📚 Informasi Tambahan
                            </h3>
                            <p className="text-blue-800">
                                Untuk informasi lebih lengkap mengenai dasar hukum SAKIP, 
                                silakan hubungi Bagian Hukum Sekretariat Daerah atau 
                                Inspektorat Daerah Kota Kotamobagu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}