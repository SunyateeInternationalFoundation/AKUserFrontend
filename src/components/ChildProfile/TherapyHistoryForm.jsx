import { useState } from "react";

export function TherapyHistoryForm({ onNext, onPrev }) {
  const [formData, setFormData] = useState({
    schoolName: "",
    gradeLevel: "",
    speechTherapy: false,
    occupationalTherapy: false,
    aba: false,
    otherTherapy: "",
    goalsAchieved: "",
    challengesObserved: "",
    strengthsAndInterests: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "checkbox" ? e.target.checked : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    sessionStorage.setItem("therapyHistory", JSON.stringify(formData));
    onNext();
  };
  const therapyHistory = JSON.parse(sessionStorage.getItem("therapyHistory"));
  console.log("therapyHistory", therapyHistory);
  return (
    <div className="w-full h-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">
        Educational and Therapy History
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="schoolName"
              className="block text-sm font-medium text-gray-700"
            >
              Current/Previous School Name
            </label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={formData?.schoolName || therapyHistory?.schoolName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="gradeLevel"
              className="block text-sm font-medium text-gray-700"
            >
              Grade/Level
            </label>
            <input
              type="text"
              id="gradeLevel"
              name="gradeLevel"
              value={formData?.gradeLevel || therapyHistory?.gradeLevel}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Therapies Received</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="speechTherapy"
                checked={
                  formData?.speechTherapy || therapyHistory?.speechTherapy
                }
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="text-sm font-medium text-gray-700">
                Speech Therapy
              </span>
            </label>
          </div>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="occupationalTherapy"
                checked={
                  formData?.occupationalTherapy ||
                  therapyHistory?.occupationalTherapy
                }
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="text-sm font-medium text-gray-700">
                Occupational Therapy
              </span>
            </label>
          </div>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="aba"
                checked={formData?.aba || therapyHistory?.aba}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="text-sm font-medium text-gray-700">
                Applied Behavior Analysis (ABA)
              </span>
            </label>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="otherTherapy"
              className="block text-sm font-medium text-gray-700"
            >
              Other Therapies (please specify)
            </label>
            <input
              type="text"
              id="otherTherapy"
              name="otherTherapy"
              value={formData?.otherTherapy || therapyHistory?.otherTherapy}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="goalsAchieved"
            className="block text-sm font-medium text-gray-700"
          >
            Goals Achieved Through Therapy
          </label>
          <textarea
            id="goalsAchieved"
            name="goalsAchieved"
            value={formData?.goalsAchieved || therapyHistory?.goalsAchieved}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="challengesObserved"
            className="block text-sm font-medium text-gray-700"
          >
            Challenges Observed
          </label>
          <textarea
            id="challengesObserved"
            name="challengesObserved"
            value={
              formData?.challengesObserved || therapyHistory?.challengesObserved
            }
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="strengthsAndInterests"
            className="block text-sm font-medium text-gray-700"
          >
            Strengths and Interests
          </label>
          <textarea
            id="strengthsAndInterests"
            name="strengthsAndInterests"
            value={
              formData?.strengthsAndInterests ||
              therapyHistory?.strengthsAndInterests
            }
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
        </div>

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
            className="px-4 py-2 text-sm bg-black text-white rounded-md hover:bg-[#334155] focus:outline-none"
          >
            Save and Proceed
          </button>
        </div>
      </form>
    </div>
  );
}
