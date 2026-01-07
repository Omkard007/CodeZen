import { Award } from "lucide-react";
import { Logo } from "./brand/logo";

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
      className="bg-white p-12 shadow-2xl relative overflow-hidden aspect-video h-full w-full"
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-16 space-y-2">
        {/* Award Icon */}
        <div className="w-full flex justify-center items-center">
          <Logo showText={false} size="lg" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-serif  text-gray-800">
          Certificate of Completion
        </h1>

        {/* Subtitle */}
        <p className="text-xs text-gray-600 uppercase tracking-wider">
          This is to certify that
        </p>

        {/* Student Name */}
        <h2 className="text-2xl font-serif  text-gray-900 border-b-2 border-amber-500 pb-2 px-8">
          {studentName || "Student Name"}
        </h2>

        {/* Course Info */}
        <p className="text-gray-700 text-sm ">
          has successfully completed the course
        </p>
        <h3 className="text-2xl font-serif text-amber-700">
          {courseName || "Course Name"}
        </h3>

        {/* Date and Instructor */}
        <div className="flex justify-between w-full my-2 ">
          <div className="flex-1 border-t-2 border-gray-400">
            <p className="text-xs text-gray-600">Date</p>
            <p className="text-gray-800 text-xs">
              {completionDate || "MM/DD/YYYY"}
            </p>
          </div>
          <div className="flex-1"></div>
          <div className="flex-1 border-t-2 border-gray-400">
            <p className="text-xs text-gray-600">Instructor</p>
            <p className="text-gray-800 text-xs">
              {instructorName || "Instructor Name"}
            </p>
          </div>
        </div>

        {/* Certificate ID */}
        <div className=" text-xs text-gray-500">
          Certificate ID: {certificateId || "CERT-XXXX-XXXX"}
        </div>
      </div>
    </div>
  );
}
