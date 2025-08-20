import { Head, Link } from '@inertiajs/react';

export default function Contact() {
    return (
        <>
            <Head title="Kontak Kami - E-SAKIP Kotamobagu" />
            
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
                                <span className="text-gray-900 font-semibold">Kontak Kami</span>
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

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            📞 Kontak Kami
                        </h1>
                        <p className="text-xl text-gray-600">
                            Hubungi tim E-SAKIP untuk bantuan dan informasi lebih lanjut
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">
                                📍 Informasi Kontak
                            </h2>
                            
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                        <span className="text-xl">🏢</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Alamat Kantor</h3>
                                        <p className="text-gray-600">
                                            Balai Kota Kotamobagu<br />
                                            Jl. Kotamobagu-Modayag<br />
                                            Kotamobagu, Sulawesi Utara<br />
                                            95711
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                        <span className="text-xl">📞</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Telepon</h3>
                                        <p className="text-gray-600">
                                            (0434) 881234<br />
                                            (0434) 881235
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                                        <span className="text-xl">📧</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-600">
                                            sakip@kotamobagu.go.id<br />
                                            admin@kotamobagu.go.id
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                                        <span className="text-xl">⏰</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Jam Operasional</h3>
                                        <p className="text-gray-600">
                                            Senin - Jumat: 07:30 - 16:00 WITA<br />
                                            Sabtu - Minggu: Tutup
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Key Contacts */}
                            <div className="mt-12">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">
                                    👥 Kontak Utama
                                </h3>
                                <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                                    <div className="border-b pb-4">
                                        <h4 className="font-semibold text-gray-900">Tim Administrator SAKIP</h4>
                                        <p className="text-gray-600 text-sm mt-1">Bantuan teknis dan akses sistem</p>
                                        <p className="text-blue-600 text-sm">admin@kotamobagu.go.id</p>
                                    </div>
                                    
                                    <div className="border-b pb-4">
                                        <h4 className="font-semibold text-gray-900">Inspektorat Daerah</h4>
                                        <p className="text-gray-600 text-sm mt-1">Evaluasi dan monitoring SAKIP</p>
                                        <p className="text-blue-600 text-sm">inspektorat@kotamobagu.go.id</p>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-semibold text-gray-900">BAPPEDA</h4>
                                        <p className="text-gray-600 text-sm mt-1">Perencanaan dan koordinasi</p>
                                        <p className="text-blue-600 text-sm">bappeda@kotamobagu.go.id</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">
                                💬 Kirim Pesan
                            </h2>
                            
                            <div className="bg-white rounded-lg shadow-md p-8">
                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Nama Lengkap
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Masukkan nama lengkap Anda"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="nama@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="agency" className="block text-sm font-medium text-gray-700 mb-2">
                                            Instansi/Perangkat Daerah
                                        </label>
                                        <input
                                            type="text"
                                            id="agency"
                                            name="agency"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Nama instansi Anda"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subjek
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Pilih subjek pesan</option>
                                            <option value="technical">Bantuan Teknis Sistem</option>
                                            <option value="account">Masalah Akun/Login</option>
                                            <option value="training">Pelatihan SAKIP</option>
                                            <option value="evaluation">Evaluasi dan Monitoring</option>
                                            <option value="document">Upload Dokumen</option>
                                            <option value="other">Lainnya</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Pesan
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Tulis pesan atau pertanyaan Anda..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                                    >
                                        📤 Kirim Pesan
                                    </button>
                                </form>
                            </div>

                            {/* Quick Help */}
                            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                                    ⚡ Butuh Bantuan Cepat?
                                </h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                        <span className="text-blue-800">
                                            <strong>Login bermasalah?</strong> Hubungi admin@kotamobagu.go.id
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                        <span className="text-blue-800">
                                            <strong>Upload dokumen?</strong> Pastikan file PDF maksimal 5MB
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                        <span className="text-blue-800">
                                            <strong>Pelatihan SAKIP?</strong> Cek jadwal di dashboard Anda
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}