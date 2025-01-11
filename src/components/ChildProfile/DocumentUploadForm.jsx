import { useState } from "react";

export function DocumentUploadForm({ onSubmit, onPrev }) {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Files to upload:", files);
    onSubmit();
  };

  return (
    <div className="w-full h-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">Document Upload</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="fileUpload"
            className="block text-sm font-medium text-gray-700"
          >
            Upload relevant documents (e.g., medical reports, previous
            assessments)
          </label>
          <input
            type="file"
            id="fileUpload"
            onChange={handleFileChange}
            multiple
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {files.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Selected Files:</h3>
            <ul className="list-disc pl-5">
              {files.map((file, index) => (
                <li key={index} className="text-sm text-gray-600">
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex justify-between">
          <button
            type="button"
            onClick={onPrev}
            className="px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded-md hover:bg-[#d1d5db]"
          >
            Previous
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}
