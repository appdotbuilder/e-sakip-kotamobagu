import { Head, Link } from '@inertiajs/react';

interface Document {
    id: number;
    title: string;
    status: string;
    created_at: string;
    government_agency?: { name: string };
}

interface Evaluation {
    id: number;
    title: string;
    evaluation_date: string;
    score?: number;
    status: string;
    government_agency?: { name: string };
}

interface Props {
    pendingDocuments: Document[];
    recentEvaluations: Evaluation[];
    stats: {
        pending_reviews: number;
        approved_documents: number;
        total_agencies: number;
        total_evaluations: number;
        my_evaluations?: number;
    };
    [key: string]: unknown;
}

export default function AdminDashboard({ pendingDocuments, recentEvaluations, stats }: Props) {
    return (
        <>
            <Head title="Dashboard Admin - E-SAKIP Kotamobagu" />
            
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">
                                    🏛️ Dashboard Administrator
                                </h1>
                                <p className="text-gray-600 mt-2">
                                    Kelola dan monitor sistem E-SAKIP Kotamobagu
                                </p>
                            </div>
                            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
                                🏠 Ke Beranda
                            </Link>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-red-100 text-red-600">
                                    <span className="text-xl">⏳</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-500">Pending Review</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.pending_reviews}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-green-100 text-green-600">
                                    <span className="text-xl">✅</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-500">Dokumen Disetujui</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.approved_documents}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                                    <span className="text-xl">🏢</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-500">Perangkat Daerah</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.total_agencies}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                                    <span className="text-xl">🔍</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-500">
                                        {stats.my_evaluations !== undefined ? 'Evaluasi Saya' : 'Total Evaluasi'}
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {stats.my_evaluations !== undefined ? stats.my_evaluations : stats.total_evaluations}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Pending Documents */}
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="px-6 py-4 border-b">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    ⏳ Dokumen Menunggu Review
                                </h2>
                            </div>
                            <div className="p-6">
                                {pendingDocuments.length > 0 ? (
                                    <div className="space-y-4">
                                        {pendingDocuments.slice(0, 5).map((doc) => (
                                            <div key={doc.id} className="border-l-4 border-orange-400 pl-4">
                                                <h3 className="font-medium text-gray-900">{doc.title}</h3>
                                                <p className="text-sm text-gray-600">
                                                    {doc.government_agency?.name}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    Diupload: {new Date(doc.created_at).toLocaleDateString('id-ID')}
                                                </p>
                                            </div>
                                        ))}
                                        {pendingDocuments.length > 5 && (
                                            <p className="text-sm text-gray-500 text-center pt-4 border-t">
                                                +{pendingDocuments.length - 5} dokumen lainnya
                                            </p>
                                        )}
                                    </div>
                                ) : (
                                    <div className="text-center text-gray-500 py-8">
                                        <div className="text-4xl mb-2">📝</div>
                                        <p>Tidak ada dokumen yang menunggu review</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Recent Evaluations */}
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="px-6 py-4 border-b">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    📊 Evaluasi Terbaru
                                </h2>
                            </div>
                            <div className="p-6">
                                {recentEvaluations.length > 0 ? (
                                    <div className="space-y-4">
                                        {recentEvaluations.map((evaluation) => (
                                            <div key={evaluation.id} className="border-l-4 border-blue-400 pl-4">
                                                <h3 className="font-medium text-gray-900">{evaluation.title}</h3>
                                                <p className="text-sm text-gray-600">
                                                    {evaluation.government_agency?.name}
                                                </p>
                                                <div className="flex items-center space-x-4 mt-1">
                                                    <span className="text-xs text-gray-500">
                                                        {new Date(evaluation.evaluation_date).toLocaleDateString('id-ID')}
                                                    </span>
                                                    {evaluation.score && (
                                                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                                            Score: {evaluation.score}
                                                        </span>
                                                    )}
                                                    <span className={`text-xs px-2 py-1 rounded ${
                                                        evaluation.status === 'final'
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-yellow-100 text-yellow-800'
                                                    }`}>
                                                        {evaluation.status === 'final' ? 'Final' : 'Draft'}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center text-gray-500 py-8">
                                        <div className="text-4xl mb-2">🔍</div>
                                        <p>Belum ada evaluasi</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="mt-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">🚀 Aksi Cepat</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <button className="bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors text-left">
                                <div className="text-2xl mb-2">👥</div>
                                <h3 className="font-medium text-gray-900">Kelola Pengguna</h3>
                                <p className="text-sm text-gray-500">Tambah, edit, atau hapus pengguna</p>
                            </button>
                            
                            <button className="bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors text-left">
                                <div className="text-2xl mb-2">📋</div>
                                <h3 className="font-medium text-gray-900">Review Dokumen</h3>
                                <p className="text-sm text-gray-500">Tinjau dokumen yang diunggah</p>
                            </button>
                            
                            <button className="bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors text-left">
                                <div className="text-2xl mb-2">📊</div>
                                <h3 className="font-medium text-gray-900">Buat Evaluasi</h3>
                                <p className="text-sm text-gray-500">Tambah evaluasi baru</p>
                            </button>
                            
                            <button className="bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors text-left">
                                <div className="text-2xl mb-2">📈</div>
                                <h3 className="font-medium text-gray-900">Lihat Laporan</h3>
                                <p className="text-sm text-gray-500">Akses laporan lengkap</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}