import React from 'react';
import Image from 'next/image';
import { Clock } from 'lucide-react';

function InterviewComplete() {
  return (
    <div className="flex items-center justify-center flex-col bg-white px-4">
      <Image
        src="/check.png"
        alt="Logo"
        width={100}
        height={100}
        className="w-[70px] h-[70px] mt-10"
      />
      <h2 className="font-bold text-2xl text-center">Interview Complete!</h2>
      <p className="mt-2 text-sm text-center">
        Thank you for participating in the AI-driven Interview
      </p>

      <div className="flex flex-col items-center justify-center p-6 space-y-6 w-full">
        {/* Top Image */}
        <div className="w-full max-w-[700px]">
          <Image
            src="/Nice.jpg"
            alt="Main Visual"
            width={700}
            height={450}
            className="rounded-xl shadow-md w-full h-auto"
          />
        </div>

        {/* Card Section */}
        <div className="border rounded-xl flex flex-col items-center justify-center px-6 py-8 w-full max-w-md shadow-md bg-white">
          <Image
            src="/next.jpg"
            alt="Logo"
            width={80}
            height={80}
            className="w-[80px] h-[80px] mb-2"
          />
          <h2 className="font-bold text-2xl mb-2 text-center">What's Next?</h2>
          <p className="text-sm text-center text-gray-600 mb-4">
            The recruiter will review your interview responses and will contact
            you soon regarding the next steps.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Response within 2–3 business days
          </p>
        </div>
      </div>
    </div>
  );
}

export default InterviewComplete;
