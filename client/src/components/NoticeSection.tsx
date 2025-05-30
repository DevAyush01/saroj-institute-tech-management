import { useState } from 'react';

import {
  FiCalendar,
  FiChevronRight,
  FiFileText,
  FiDownload,
  FiX
} from 'react-icons/fi';
import {NoticeImg} from '../assets/images';

interface Notice {
  id: number;
  title: string;
  date: string;
  fileUrl: string;
  fileType: 'pdf' | 'image';
}

const NoticeSection = () => {
  const [notices] = useState<Notice[]>([
    {
      id: 1,
      title: 'Mid-Term Examination Schedule - 2025',
      date: '2025-03-15',
      fileUrl: NoticeImg,
      fileType: 'image'
    },
    {
      id: 2,
      title: 'Annual Sports Day Announcement',
      date: '2025-02-28',
      fileUrl: NoticeImg,
      fileType: 'image'
    },
    {
      id: 3,
      title: 'Scholarship Application Guidelines',
      date: '2025-01-10',
      fileUrl: NoticeImg,
      fileType: 'image' // ✅ fixed
    },
    {
      id: 4,
      title: 'Campus Recruitment Drive',
      date: '2025-04-05',
      fileUrl: NoticeImg,
      fileType: 'image'
    }
  ]);

  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">College Notices</h2>
        <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
          View All Notices <FiChevronRight className="ml-1" />
        </button>
      </div>

      {/* Notices */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {notices.map((notice) => (
          <div
            key={notice.id}
            className="bg-white shadow rounded overflow-hidden cursor-pointer"
            onClick={() => setSelectedNotice(notice)}
          >
            <div className="h-48 flex items-center justify-center bg-gray-100">
              {notice.fileType === 'image' ? (
                <img
                  src={notice.fileUrl}
                  alt={notice.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <FiFileText className="text-5xl text-red-500 mx-auto" />
                  <p className="text-sm text-gray-600 mt-2">PDF Document</p>
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FiCalendar className="mr-1" />
                {formatDate(notice.date)}
              </div>
              <h3 className="font-semibold text-gray-800">{notice.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Viewer Modal */}
      {selectedNotice && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative bg-white rounded shadow-lg p-4 max-w-3xl w-full max-h-[90vh] overflow-auto">
            <button
              onClick={() => setSelectedNotice(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              <FiX className="text-xl" />
            </button>
            <h3 className="text-lg font-bold mb-4">{selectedNotice.title}</h3>
            {selectedNotice.fileType === 'pdf' ? (
              <iframe
                src={selectedNotice.fileUrl}
                className="w-full h-[70vh]"
                frameBorder="0"
              ></iframe>
            ) : (
              <img
                src={selectedNotice.fileUrl}
                alt={selectedNotice.title}
                className="max-w-full max-h-[80vh] mx-auto"
              />
            )}
            <div className="mt-4 text-right">
              <a
                href={selectedNotice.fileUrl}
                download
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                <FiDownload className="mr-2" />
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeSection;
