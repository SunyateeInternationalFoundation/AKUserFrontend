import { useState } from "react";

export function MedicalInfoForm({ onNext, onPrev }) {
  const [formData, setFormData] = useState({
    dateOfDiagnosis: "",
    diagnosingSpecialist: "",
    coOccurringConditions: "",
    allergies: "",
    medications: "",
    primaryHealthcareProviderName: "",
    primaryHealthcareProviderContact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onNext();
  };

  return (
    <div className="w-full h-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">Medical Information</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="dateOfDiagnosis"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Diagnosis
            </label>
            <input
              type="date"
              id="dateOfDiagnosis"
              name="dateOfDiagnosis"
              value={formData.dateOfDiagnosis}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="diagnosingSpecialist"
              className="block text-sm font-medium text-gray-700"
            >
              Diagnosing Specialist
            </label>
            <input
              type="text"
              id="diagnosingSpecialist"
              name="diagnosingSpecialist"
              value={formData.diagnosingSpecialist}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label
              htmlFor="coOccurringConditions"
              className="block text-sm font-medium text-gray-700"
            >
              Co-occurring Conditions
            </label>
            <textarea
              id="coOccurringConditions"
              name="coOccurringConditions"
              value={formData.coOccurringConditions}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="allergies"
              className="block text-sm font-medium text-gray-700"
            >
              Allergies
            </label>
            <input
              type="text"
              id="allergies"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="medications"
              className="block text-sm font-medium text-gray-700"
            >
              Medications
            </label>
            <input
              type="text"
              id="medications"
              name="medications"
              value={formData.medications}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="primaryHealthcareProviderName"
              className="block text-sm font-medium text-gray-700"
            >
              Primary Healthcare Provider Name
            </label>
            <input
              type="text"
              id="primaryHealthcareProviderName"
              name="primaryHealthcareProviderName"
              value={formData.primaryHealthcareProviderName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="primaryHealthcareProviderContact"
              className="block text-sm font-medium text-gray-700"
            >
              Primary Healthcare Provider Contact
            </label>
            <input
              type="tel"
              id="primaryHealthcareProviderContact"
              name="primaryHealthcareProviderContact"
              value={formData.primaryHealthcareProviderContact}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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
