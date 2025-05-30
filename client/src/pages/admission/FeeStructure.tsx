// src/components/FeeStructure.tsx
import { useState, useEffect } from 'react';

const pdfPath = "/pdfs/SITM-2025-26.pdf";

const FeeStructure = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadProgress, setDownloadProgress] = useState(0);
    const [viewMode, setViewMode] = useState<'preview' | 'full'>('preview');

    // Simulate download progress
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isDownloading) {
            interval = setInterval(() => {
                setDownloadProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setIsDownloading(false);
                        return 100;
                    }
                    return prev + 10;
                });
            }, 200);
        }

        return () => clearInterval(interval);
    }, [isDownloading]);

    const handleDownload = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDownloading(true);
        setDownloadProgress(0);

        // Simulate download completion
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = pdfPath;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.click();
        }, 2200);
    };

    return (
        <div className="min-h-screen flex items-center py-24 justify-center bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl max-w-6xl w-full">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-2">
                            <span className="block">SAROJ INSTITUTE OF TECHNOLOGY & MANAGEMENT (SITM), LUCKNOW</span>
                            <span className="block text-blue-600 text-2xl mt-4">Fee Structure for Session 2025-2026</span>
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Ahimamau P.O. Arjunganj Sultanpur Road Lucknow | Phone: (0522) 2812731, 3092050, 2812760
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3 space-y-6">
                            <div className="space-y-4">
                                <button
                                    onClick={handleDownload}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    disabled={isDownloading}
                                    className={`inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform ${isHovered ? 'scale-105' : 'scale-100'
                                        } ${isDownloading ? 'opacity-75 cursor-not-allowed' : ''}`}
                                >
                                    {isDownloading ? (
                                        <span className="flex items-center">
                                            <svg
                                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Downloading...
                                        </span>
                                    ) : (
                                        <>
                                            <svg
                                                className="-ml-1 mr-3 h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            Download PDF
                                        </>
                                    )}
                                </button>

                                {isDownloading && (
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out"
                                            style={{ width: `${downloadProgress}%` }}
                                        ></div>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4">
                                <button
                                    onClick={() => setViewMode('preview')}
                                    className={`w-full px-4 py-2 text-sm font-medium rounded-lg ${viewMode === 'preview' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
                                >
                                    Quick Summary
                                </button>
                                <button
                                    onClick={() => setViewMode('full')}
                                    className={`w-full px-4 py-2 text-sm font-medium rounded-lg ${viewMode === 'full' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
                                >
                                    Full PDF Viewer
                                </button>
                            </div>

                            {viewMode === 'preview' && (
                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <h3 className="text-lg font-medium text-gray-900 mb-3">Quick Overview</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-100">
                                                <tr>
                                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Fees</th>
                                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tuition Fees</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                <tr><td className="px-4 py-2 text-sm text-gray-900">B.Pharma</td><td className="px-4 py-2 text-sm text-gray-900">₹103,000</td><td className="px-4 py-2 text-sm text-gray-900">₹80,000</td></tr>
                                                <tr><td className="px-4 py-2 text-sm text-gray-900">D.Pharma</td><td className="px-4 py-2 text-sm text-gray-900">₹60,000</td><td className="px-4 py-2 text-sm text-gray-900">₹60,000</td></tr>
                                                <tr><td className="px-4 py-2 text-sm text-gray-900">Diploma Engg (After 12<sup>th</sup>)</td><td className="px-4 py-2 text-sm text-gray-900">₹40,000</td><td className="px-4 py-2 text-sm text-gray-900">₹40,000</td></tr>
                                                <tr><td className="px-4 py-2 text-sm text-gray-900">BBA</td><td className="px-4 py-2 text-sm text-gray-900">₹60,000</td><td className="px-4 py-2 text-sm text-gray-900">₹45,000</td></tr>
                                                <tr><td className="px-4 py-2 text-sm text-gray-900">BCA</td><td className="px-4 py-2 text-sm text-gray-900">₹60,000</td><td className="px-4 py-2 text-sm text-gray-900">₹45,000</td></tr>
                                                <tr><td className="px-4 py-2 text-sm text-gray-900">B.Tech</td><td className="px-4 py-2 text-sm text-gray-900">₹85,000</td><td className="px-4 py-2 text-sm text-gray-900">₹60,000</td></tr>
                                                <tr><td className="px-4 py-2 text-sm text-gray-900">B.Tech Lateral Entry</td><td className="px-4 py-2 text-sm text-gray-900">₹45,000</td><td className="px-4 py-2 text-sm text-gray-900">₹45,000</td></tr>
                                                <tr><td className="px-4 py-2 text-sm text-gray-900">M.Tech</td><td className="px-4 py-2 text-sm text-gray-900">₹60,000</td><td className="px-4 py-2 text-sm text-gray-900">₹40,000</td></tr>
                                                <tr><td className="px-4 py-2 text-sm text-gray-900">MBA</td><td className="px-4 py-2 text-sm text-gray-900">₹60,000</td><td className="px-4 py-2 text-sm text-gray-900">₹40,000</td></tr>
                                                <tr><td className="px-4 py-2 text-sm text-gray-900">MCA</td><td className="px-4 py-2 text-sm text-gray-900">₹60,000</td><td className="px-4 py-2 text-sm text-gray-900">₹40,000</td></tr>
                                                <tr><td className="px-4 py-2 text-sm text-gray-900">B.Pharma Lateral</td><td className="px-4 py-2 text-sm text-gray-900">₹60,000</td><td className="px-4 py-2 text-sm text-gray-900">₹60,000</td></tr>
                                            </tbody>

                                        </table>
                                    </div>
                                    <div className="mt-4 text-sm text-gray-600 space-y-2">
                                        <p>• 10% of the total fee will be charged as a Development Fee.</p>
                                        <p>• Discount/scholarship will be given only on the Tuition Fee.</p>
                                        <p>• Sibling discount will be given, 15% of the Total Fee.</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="md:w-2/3">
                            {viewMode === 'full' ? (
                                <div className="h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                                    <iframe
                                        src={`${pdfPath}#toolbar=0&navpanes=0`}
                                        width="100%"
                                        height="100%"
                                        className="border-0"
                                        title="Fee Structure PDF Viewer"
                                    >
                                        <p className="p-4 text-gray-600">
                                            Your browser does not support PDFs.
                                            <a href={pdfPath} className="text-blue-600 hover:underline ml-1">
                                                Download the PDF instead.
                                            </a>
                                        </p>
                                    </iframe>
                                </div>
                            ) : (
                                <div className="h-[600px] flex items-center justify-center bg-gray-100 rounded-lg">
                                    <div className="text-center p-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-16 w-16 mx-auto text-gray-400 mb-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">Full PDF Available</h3>
                                        <p className="text-gray-600 mb-4">
                                            Switch to "Full PDF Viewer" mode to view the complete document
                                        </p>
                                        <button
                                            onClick={() => setViewMode('full')}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            View Full PDF
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeeStructure;