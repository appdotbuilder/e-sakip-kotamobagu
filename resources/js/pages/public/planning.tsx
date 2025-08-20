import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';

interface Document {
    id: number;
    title: string;
    description: string;
    category: string;
    created_at: string;
    government_agency?: {
        name: string;
    };
}

interface Agency {
    id: number;
    name: string;
}

interface PaginatedDocuments {
    data: Document[];
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
    current_page: number;
    last_page: number;
}

interface Props {
    documents: PaginatedDocuments;
    agencies: Agency[];
    filters: {
        agency?: string;
        category?: string;
    };
    [key: string]: unknown;
}

export default function Planning({ documents, agencies, filters }: Props) {
    const [selectedAgency, setSelectedAgency] = useState(filters.agency || '');
    const [selectedCategory, setSelectedCategory] = useState(filters.category || '');

    const handleFilter = () => {
        router.get('/monev/perencanaan', {
            agency: selectedAgency,
            category: selectedCategory,
        }, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const categories = [
        { value: 'rpjmd', label: 'RPJMD' },
        { value: 'renstra', label: 'Renstra' },
        { value: 'pk', label: 'Perjanjian Kinerja' },
        { value: 'other', label: 'Lainnya' },
    ];

    return (
        <>
            <Head title="Perencanaan - E-SAKIP Kotamobagu" />
            
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
                                <span className="text-gray-900 font-semibold">Perencanaan</span>
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
                            📋 Dokumen Perencanaan
                        </h1>
                        <p className="text-lg text-gray-600">
                            Akses dokumen perencanaan seperti RPJMD, Renstra, dan Perjanjian Kinerja 
                            dari berbagai Perangkat Daerah di Kota Kotamobagu
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">🔍 Filter Dokumen</h3>
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
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                                    Kategori Dokumen
                                </label>
                                <select
                                    id="category"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Semua Kategori</option>
                                    {categories.map((category) => (
                                        <option key={category.value} value={category.value}>
                                            {category.label}
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

                    {/* Documents List */}
                    <div className="bg-white rounded-lg shadow-md">
                        <div className="px-6 py-4 border-b">
                            <h3 className="text-lg font-semibold text-gray-900">
                                📄 Daftar Dokumen ({documents.data.length} dokumen)
                            </h3>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {documents.data.length > 0 ? (
                                documents.data.map((doc) => (
                                    <div key={doc.id} className="p-6 hover:bg-gray-50">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                                    {doc.title}
                                                </h4>
                                                <p className="text-gray-600 mb-2">
                                                    {doc.description}
                                                </p>
                                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                    <span>🏢 {doc.government_agency?.name}</span>
                                                    <span>📅 {new Date(doc.created_at).toLocaleDateString('id-ID')}</span>
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                        {doc.category?.toUpperCase()}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm font-medium">
                                                    📥 Unduh
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-12 text-center text-gray-500">
                                    <div className="text-6xl mb-4">📋</div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                                        Tidak ada dokumen ditemukan
                                    </h3>
                                    <p>Coba ubah filter pencarian Anda</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Pagination */}
                    {documents.last_page > 1 && (
                        <div className="mt-8 flex justify-center">
                            <nav className="flex items-center space-x-2">
                                {documents.links.map((link, index) => (
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
                </div>
            </div>
        </>
    );
}