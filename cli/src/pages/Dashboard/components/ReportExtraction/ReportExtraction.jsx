//import React from 'react';

const ReportExtraction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Report Extraction</h1>
        <p className="text-gray-800 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex justify-between">
          <div className="w-1/2">
            <h2 className="text-xl font-bold mb-2">Report 1</h2>
            <ul className="list-disc ml-6">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Sed do eiusmod tempor incididunt</li>
            </ul>
          </div>
          <div className="w-1/2">
            <h2 className="text-xl font-bold mb-2">Report 2</h2>
            <ul className="list-disc ml-6">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Sed do eiusmod tempor incididunt</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportExtraction;