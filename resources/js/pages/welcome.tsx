import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

interface Gallery {
    id: number;
    title: string;
}

interface Document {
    id: number;
    title: string;
    government_agency?: { name: string };
    category?: string;
}

interface Props {
    featuredGallery: Gallery[];
    recentDocuments: Document[];
    stats: {
        total_agencies: number;
        total_documents: number;
        total_indicators: number;
        total_evaluations: number;
    };
    [key: string]: unknown;
}

export default function Welcome({ featuredGallery = [], recentDocuments = [], stats = {
    total_agencies: 0,
    total_documents: 0,
    total_indicators: 0,
    total_evaluations: 0
} }: Props) {
    // Use featuredGallery to avoid unused variable warning
    console.log('Featured gallery items:', featuredGallery.length);
    const { auth } = usePage<SharedData>().props;

    const menuItems = [
        { name: 'Perencanaan', href: '/monev/perencanaan', icon: '📋', description: 'Dokumen RPJMD, Renstra, dan Perjanjian Kinerja' },
        { name: 'Pengukuran', href: '/monev/pengukuran', icon: '📊', description: 'Tabulasi pencapaian Indikator Kinerja Utama' },
        { name: 'Pelaporan', href: '/monev/pelaporan', icon: '📑', description: 'Dokumen LKjIP dan laporan kinerja lainnya' },
        { name: 'Evaluasi', href: '/monev/evaluasi', icon: '🔍', description: 'Hasil evaluasi dari Inspektorat Kotamobagu' },
        { name: 'Laporan', href: '/monev/laporan', icon: '📈', description: 'Rekap belanja dan jumlah program kegiatan' },
        { name: 'Gallery', href: '/gallery', icon: '📸', description: 'Dokumentasi kegiatan SAKIP' },
    ];

    const infoPages = [
        { name: 'Peraturan', href: '/peraturan', icon: '⚖️' },
        { name: 'Tentang', href: '/tentang', icon: 'ℹ️' },
        { name: 'Kontak Kami', href: '/kontak', icon: '📞' },
    ];

    return (
        <>
            <Head title="E-SAKIP Kotamobagu">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                {/* Header */}
                <header className="bg-white shadow-sm border-b-2 border-blue-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                                    🏛️
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">E-SAKIP</h1>
                                    <p className="text-sm text-gray-600">Pemerintah Kota Kotamobagu</p>
                                </div>
                            </div>
                            <nav className="flex items-center space-x-4">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <div className="flex space-x-3">
                                        <Link
                                            href={route('login')}
                                            className="text-blue-600 hover:text-blue-800 px-4 py-2 font-semibold"
                                        >
                                            Masuk
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                        >
                                            Daftar
                                        </Link>
                                    </div>
                                )}
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            🏛️ <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">E-SAKIP</span>
                        </h1>
                        <p className="text-2xl text-gray-700 mb-4 font-semibold">
                            Sistem Akuntabilitas Kinerja Instansi Pemerintah
                        </p>
                        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                            Platform digital untuk monitoring, evaluasi, dan pelaporan kinerja 
                            Pemerintah Kota Kotamobagu secara transparan dan akuntabel
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="text-3xl font-bold text-blue-600 mb-2">{stats.total_agencies}</div>
                                <div className="text-sm text-gray-600">Perangkat Daerah</div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="text-3xl font-bold text-green-600 mb-2">{stats.total_documents}</div>
                                <div className="text-sm text-gray-600">Dokumen Publik</div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="text-3xl font-bold text-purple-600 mb-2">{stats.total_indicators}</div>
                                <div className="text-sm text-gray-600">Indikator Kinerja</div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="text-3xl font-bold text-orange-600 mb-2">{stats.total_evaluations}</div>
                                <div className="text-sm text-gray-600">Evaluasi Selesai</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Menu */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                            📊 Menu Monitoring & Evaluasi
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="group bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                                >
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Recent Documents */}
                {recentDocuments.length > 0 && (
                    <section className="py-16 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                                📄 Dokumen Terbaru
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {recentDocuments.slice(0, 6).map((doc) => (
                                    <div key={doc.id} className="bg-white rounded-lg shadow-md p-6">
                                        <h3 className="font-semibold text-gray-900 mb-2">{doc.title}</h3>
                                        <p className="text-sm text-gray-600 mb-2">{doc.government_agency?.name}</p>
                                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                            {doc.category?.toUpperCase()}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Info Pages */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                            📚 Informasi Lainnya
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {infoPages.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="group bg-white border border-gray-200 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-all duration-200"
                                >
                                    <div className="text-5xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                                        {item.name}
                                    </h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            🚀 Bergabung dengan E-SAKIP Kotamobagu
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Akses sistem monitoring dan evaluasi kinerja untuk meningkatkan transparansi 
                            dan akuntabilitas pemerintahan yang lebih baik
                        </p>
                        {!auth.user && (
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href={route('register')}
                                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                                >
                                    📝 Daftar Sekarang
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                                >
                                    🔑 Masuk ke Sistem
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                                        🏛️
                                    </div>
                                    <div>
                                        <h3 className="font-bold">E-SAKIP</h3>
                                        <p className="text-sm text-gray-300">Kotamobagu</p>
                                    </div>
                                </div>
                                <p className="text-gray-300">
                                    Sistem Akuntabilitas Kinerja Instansi Pemerintah 
                                    Kota Kotamobagu untuk transparansi dan akuntabilitas yang lebih baik.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Menu Utama</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li><Link href="/monev/perencanaan" className="hover:text-white">Perencanaan</Link></li>
                                    <li><Link href="/monev/pengukuran" className="hover:text-white">Pengukuran</Link></li>
                                    <li><Link href="/monev/pelaporan" className="hover:text-white">Pelaporan</Link></li>
                                    <li><Link href="/monev/evaluasi" className="hover:text-white">Evaluasi</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Informasi</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li><Link href="/peraturan" className="hover:text-white">Peraturan</Link></li>
                                    <li><Link href="/tentang" className="hover:text-white">Tentang SAKIP</Link></li>
                                    <li><Link href="/kontak" className="hover:text-white">Kontak Kami</Link></li>
                                    <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                            <p>&copy; 2024 E-SAKIP Pemerintah Kota Kotamobagu. Semua hak dilindungi.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}