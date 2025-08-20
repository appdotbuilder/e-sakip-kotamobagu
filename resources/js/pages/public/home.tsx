import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

interface Gallery {
    id: number;
    title: string;
}

interface Document {
    id: number;
    title: string;
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

export default function PublicHome({ featuredGallery, recentDocuments, stats }: Props) {
    const { auth } = usePage<SharedData>().props;
    
    // Use the props
    console.log('Gallery:', featuredGallery);
    console.log('Documents:', recentDocuments);
    console.log('Stats:', stats);
    console.log('Auth:', auth);

    return (
        <>
            <Head title="E-SAKIP Kotamobagu">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                {/* This would be the same content as welcome.tsx but as a separate page */}
                {/* For now, redirect to welcome */}
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            🏛️ E-SAKIP Kotamobagu
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Sistem Akuntabilitas Kinerja Instansi Pemerintah
                        </p>
                        <Link
                            href="/"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
                        >
                            Kembali ke Beranda
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}