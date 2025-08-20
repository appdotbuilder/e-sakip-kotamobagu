import { Head, Link } from '@inertiajs/react';

interface Document {
    id: number;
    title: string;
    status: string;
    created_at: string;
    type: string;
    category: string;
    description?: string;
}

interface PerformanceIndicator {
    id: number;
    indicator_name: string;
    target: number;
    achievement: number;
    achievement_percentage: number;
}

interface Evaluation {
    id: number;
    title: string;
    evaluation_date: string;
    score?: number;
    stage: string;
}

interface Props {
    myDocuments: Document[];
    performanceIndicators: PerformanceIndicator[];
    recentEvaluations: Evaluation[];
    indicatorProgress: Array<{
        name: string;
        target: number;
        achievement: number;
        percentage: number;
    }>;
    stats: {
        my_documents: number;
        approved_documents: number;
        pending_documents: number;
        performance_indicators: number;
    };
    [key: string]: unknown;
}

export default function OpdDashboard({ 
    myDocuments, 
    recentEvaluations, 
    indicatorProgress,
    stats 
}: Props) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'approved':
                return 'bg-green-100 text-green-800';
            case 'pending_review':
                return 'bg-yellow-100 text-yellow-800';
            case 'rejected':
                return 'bg-red-100 text-red-800';
            case 'revision_needed':
                return 'bg-orange-100 text-orange-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'approved':
                return '✅ Disetujui';
            case 'pending_review':
                return '⏳ Menunggu Review';
            case 'rejected':
                return '❌ Ditolak';
            case 'revision_needed':
                return '🔄 Perlu Revisi';
            case 'draft':
                return '📝 Draft';
            default:
                return status;
        }
    };

    return (
        <>
            <Head title="Dashboard OPD - E-SAKIP Kotamobagu" />
            
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">
                                    🏢 Dashboard Perangkat Daerah
                                </h1>
                                <p className="text-gray-600 mt-2">
                                    Kelola data SAKIP instansi Anda
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
                                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                                    <span className="text-xl">📄</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-500">Total Dokumen</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.my_documents}</p>
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
                                <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                                    <span className="text-xl">⏳</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-500">Pending Review</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.pending_documents}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                                    <span className="text-xl">📊</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-500">Indikator Kinerja</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.performance_indicators}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Performance Indicators Progress */}
                    {indicatorProgress.length > 0 && (
                        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">
                                📊 Progress Indikator Kinerja Utama
                            </h2>
                            <div className="space-y-4">
                                {indicatorProgress.slice(0, 5).map((indicator, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm font-medium text-gray-900">
                                                {indicator.name}
                                            </span>
                                            <span className="text-sm font-medium text-gray-600">
                                                {indicator.achievement} / {indicator.target} ({indicator.percentage}%)
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full ${
                                                    indicator.percentage >= 90
                                                        ? 'bg-green-500'
                                                        : indicator.percentage >= 70
                                                        ? 'bg-yellow-500'
                                                        : 'bg-red-500'
                                                }`}
                                                style={{
                                                    width: `${Math.min(indicator.percentage, 100)}%`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Recent Documents */}
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="px-6 py-4 border-b">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    📄 Dokumen Terbaru Saya
                                </h2>
                            </div>
                            <div className="p-6">
                                {myDocuments.length > 0 ? (
                                    <div className="space-y-4">
                                        {myDocuments.slice(0, 5).map((doc) => (
                                            <div key={doc.id} className="border-l-4 border-blue-400 pl-4">
                                                <h3 className="font-medium text-gray-900">{doc.title}</h3>
                                                <p className="text-sm text-gray-600 capitalize">
                                                    {doc.type} - {doc.category}
                                                </p>
                                                <div className="flex items-center space-x-4 mt-1">
                                                    <span className="text-xs text-gray-500">
                                                        {new Date(doc.created_at).toLocaleDateString('id-ID')}
                                                    </span>
                                                    <span className={`text-xs px-2 py-1 rounded ${getStatusColor(doc.status)}`}>
                                                        {getStatusLabel(doc.status)}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                        {myDocuments.length > 5 && (
                                            <p className="text-sm text-gray-500 text-center pt-4 border-t">
                                                +{myDocuments.length - 5} dokumen lainnya
                                            </p>
                                        )}
                                    </div>
                                ) : (
                                    <div className="text-center text-gray-500 py-8">
                                        <div className="text-4xl mb-2">📄</div>
                                        <p>Belum ada dokumen yang diupload</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Recent Evaluations */}
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="px-6 py-4 border-b">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    🔍 Evaluasi Terbaru
                                </h2>
                            </div>
                            <div className="p-6">
                                {recentEvaluations.length > 0 ? (
                                    <div className="space-y-4">
                                        {recentEvaluations.map((evaluation) => (
                                            <div key={evaluation.id} className="border-l-4 border-green-400 pl-4">
                                                <h3 className="font-medium text-gray-900">{evaluation.title}</h3>
                                                <p className="text-sm text-gray-600 capitalize">
                                                    {evaluation.stage}
                                                </p>
                                                <div className="flex items-center space-x-4 mt-1">
                                                    <span className="text-xs text-gray-500">
                                                        {new Date(evaluation.evaluation_date).toLocaleDateString('id-ID')}
                                                    </span>
                                                    {evaluation.score && (
                                                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                                            Score: {evaluation.score}
                                                        </span>
                                                    )}
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
                                <div className="text-2xl mb-2">📋</div>
                                <h3 className="font-medium text-gray-900">Upload Dokumen</h3>
                                <p className="text-sm text-gray-500">Unggah dokumen perencanaan</p>
                            </button>
                            
                            <button className="bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors text-left">
                                <div className="text-2xl mb-2">📊</div>
                                <h3 className="font-medium text-gray-900">Update IKU</h3>
                                <p className="text-sm text-gray-500">Perbarui capaian indikator</p>
                            </button>
                            
                            <button className="bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors text-left">
                                <div className="text-2xl mb-2">📑</div>
                                <h3 className="font-medium text-gray-900">Buat Laporan</h3>
                                <p className="text-sm text-gray-500">Susun LKjIP dan laporan lain</p>
                            </button>
                            
                            <button className="bg-white border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors text-left">
                                <div className="text-2xl mb-2">📈</div>
                                <h3 className="font-medium text-gray-900">Lihat Kinerja</h3>
                                <p className="text-sm text-gray-500">Monitor progress kinerja</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}