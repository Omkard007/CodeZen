import { Award } from 'lucide-react';

interface CertificatePreviewProps {
  studentName: string;
  courseName: string;
  instructorName: string;
  completionDate: string;
  certificateId: string;
}

export function CertificatePreview({
  studentName,
  courseName,
  instructorName,
  completionDate,
  certificateId,
}: CertificatePreviewProps) {
  return (
    <div 
      id="certificate"
      className="bg-white p-12 shadow-2xl relative overflow-hidden"
      style={{ 
        width: '800px', 
        height: '600px',
        aspectRatio: '4/3'
      }}
    >
      {/* Decorative border */}
      <div className="absolute inset-4 border-4 border-amber-500 pointer-events-none">
        <div className="absolute inset-2 border border-amber-300"></div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-amber-400"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-amber-400"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-amber-400"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-amber-400"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-16">
        {/* Award Icon */}
        <Award className="w-16 h-16 text-amber-500 mb-4" />
        
        {/* Title */}
        <h1 className="text-4xl font-serif mb-2 text-gray-800">Certificate of Completion</h1>
        
        {/* Subtitle */}
        <p className="text-sm text-gray-600 mb-8 uppercase tracking-wider">
          This is to certify that
        </p>

        {/* Student Name */}
        <h2 className="text-5xl font-serif mb-8 text-gray-900 border-b-2 border-amber-500 pb-2 px-8">
          {studentName || 'Student Name'}
        </h2>

        {/* Course Info */}
        <p className="text-gray-700 mb-2">
          has successfully completed the course
        </p>
        <h3 className="text-2xl font-serif text-amber-700 mb-8">
          {courseName || 'Course Name'}
        </h3>

        {/* Date and Instructor */}
        <div className="flex justify-between w-full mt-auto pt-8">
          <div className="flex-1 border-t-2 border-gray-400 pt-2">
            <p className="text-sm text-gray-600">Date</p>
            <p className="text-gray-800">{completionDate || 'MM/DD/YYYY'}</p>
          </div>
          <div className="flex-1"></div>
          <div className="flex-1 border-t-2 border-gray-400 pt-2">
            <p className="text-sm text-gray-600">Instructor</p>
            <p className="text-gray-800">{instructorName || 'Instructor Name'}</p>
          </div>
        </div>

        {/* Certificate ID */}
        <div className="mt-4 text-xs text-gray-500">
          Certificate ID: {certificateId || 'CERT-XXXX-XXXX'}
        </div>
      </div>
    </div>
  );
}