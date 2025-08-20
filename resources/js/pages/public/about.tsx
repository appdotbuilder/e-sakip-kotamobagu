import { Head, Link } from '@inertiajs/react';

export default function About() {
    return (
        <>
            <Head title="Tentang SAKIP - E-SAKIP Kotamobagu" />
            
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
                                <span className="text-gray-900 font-semibold">Tentang SAKIP</span>
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

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            ℹ️ Tentang SAKIP
                        </h1>
                        <p className="text-xl text-gray-600">
                            Memahami Sistem Akuntabilitas Kinerja Instansi Pemerintah
                        </p>
                    </div>

                    {/* What is SAKIP */}
                    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            🎯 Apa itu SAKIP?
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP) adalah 
                            instrumen yang digunakan instansi pemerintah untuk mempertanggungjawabkan 
                            keberhasilan atau kegagalan pelaksanaan misi organisasi dalam mencapai 
                            tujuan-tujuan dan sasaran-sasaran yang telah ditetapkan melalui 
                            sistem pertanggungjawaban secara periodik.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            SAKIP merupakan implementasi dari PP Nomor 39 Tahun 2006 tentang 
                            Tata Cara Pengendalian dan Evaluasi Pelaksanaan Rencana Pembangunan.
                        </p>
                    </div>

                    {/* SAKIP Cycle */}
                    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            🔄 Siklus SAKIP
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📋</span>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">1. Perencanaan</h3>
                                <p className="text-sm text-gray-600">
                                    Penyusunan rencana strategis dan dokumen perencanaan kinerja
                                </p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📊</span>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">2. Pengukuran</h3>
                                <p className="text-sm text-gray-600">
                                    Pengukuran capaian kinerja berdasarkan indikator yang ditetapkan
                                </p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📑</span>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">3. Pelaporan</h3>
                                <p className="text-sm text-gray-600">
                                    Penyusunan Laporan Kinerja Instansi Pemerintah (LKjIP)
                                </p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🔍</span>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">4. Evaluasi</h3>
                                <p className="text-sm text-gray-600">
                                    Evaluasi kinerja dan review implementasi SAKIP
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            ✨ Manfaat SAKIP
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <span className="text-xl mr-3">🎯</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Akuntabilitas</h4>
                                        <p className="text-gray-600 text-sm">
                                            Memastikan pertanggungjawaban kinerja instansi pemerintah
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <span className="text-xl mr-3">📈</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Peningkatan Kinerja</h4>
                                        <p className="text-gray-600 text-sm">
                                            Mendorong peningkatan kinerja yang berkelanjutan
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <span className="text-xl mr-3">🔍</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Transparansi</h4>
                                        <p className="text-gray-600 text-sm">
                                            Memberikan transparansi informasi kinerja kepada publik
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <span className="text-xl mr-3">📊</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Pengambilan Keputusan</h4>
                                        <p className="text-gray-600 text-sm">
                                            Menyediakan data untuk pengambilan keputusan yang lebih baik
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <span className="text-xl mr-3">🎖️</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Kepercayaan Publik</h4>
                                        <p className="text-gray-600 text-sm">
                                            Meningkatkan kepercayaan masyarakat terhadap pemerintah
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <span className="text-xl mr-3">⚡</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Efisiensi</h4>
                                        <p className="text-gray-600 text-sm">
                                            Meningkatkan efisiensi dan efektivitas organisasi
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* E-SAKIP Kotamobagu */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold mb-4">
                            🏛️ E-SAKIP Kotamobagu
                        </h2>
                        <p className="leading-relaxed mb-4">
                            E-SAKIP Kotamobagu adalah platform digital yang dikembangkan untuk 
                            mendukung implementasi SAKIP di lingkungan Pemerintah Kota Kotamobagu. 
                            Sistem ini memfasilitasi perencanaan, pengukuran, pelaporan, dan 
                            evaluasi kinerja secara terintegrasi dan transparan.
                        </p>
                        <div className="bg-white bg-opacity-20 rounded-lg p-4">
                            <h3 className="font-semibold mb-2">🚀 Fitur Utama:</h3>
                            <ul className="space-y-1 text-sm">
                                <li>• Akses publik untuk transparansi informasi</li>
                                <li>• Dashboard interaktif untuk monitoring kinerja</li>
                                <li>• Manajemen dokumen perencanaan dan pelaporan</li>
                                <li>• Sistem evaluasi terintegrasi</li>
                                <li>• Laporan kinerja real-time</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}