import { Head, Link } from '@inertiajs/react';

interface Document {
    id: number;
    title: string;
    description: string;
    created_at: string;
    government_agency?: {
        name: string;
    };
}

interface Props {
    documents: {
        data: Document[];
    };
    agencies: Array<{ id: number; name: string }>;
    filters: {
        agency?: string;
    };
    [key: string]: unknown;
}

export default function Reporting({ documents, agencies, filters }: Props) {
    return (
        <>
            <Head title="Pelaporan - E-SAKIP Kotamobagu" />
            
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
                                <span className="text-gray-900 font-semibold">Pelaporan</span>
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
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            📑 Dokumen Pelaporan
                        </h1>
                        <p className="text-lg text-gray-600">
                            Dokumen LKjIP dan laporan kinerja dari Perangkat Daerah
                        </p>
                    </div>

                    <div className="text-center text-gray-500 py-16">
                        <div className="text-6xl mb-4">📑</div>
                        <p>Fitur pelaporan akan tersedia segera</p>
                        <p className="text-sm mt-2">
                            Filters: {JSON.stringify(filters)}, Agencies: {agencies.length}, 
                            Documents: {documents.data.length}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}